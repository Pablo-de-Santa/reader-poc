import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { Box3, BufferGeometry, Float32BufferAttribute, Group, Mesh, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Browser API shims needed only by Three's offline import/export helpers.
globalThis.ProgressEvent ??= class { constructor(type, values) { this.type = type; Object.assign(this, values); } };
globalThis.FileReader ??= class {
  readAsArrayBuffer(blob) { blob.arrayBuffer().then(result => { this.result = result; this.onloadend?.(); }); }
};
const folder = new URL('../public/assets/models/reader/', import.meta.url);
const source = JSON.parse(await readFile(new URL('Case%20r12%20white%20with%20logo.gltf', folder), 'utf8'));
assert.ok(!source.animations?.length && !source.skins?.length, 'Only static assets can be baked');
const binary = await readFile(new URL('Case%20r12%20white%20with%20logo.bin', folder));
assert.equal(source.buffers.length, 1);
source.buffers[0].uri = 'data:application/octet-stream;base64,' + binary.toString('base64');
const original = (await new GLTFLoader().parseAsync(JSON.stringify(source), '')).scene;
original.updateMatrixWorld(true);
const groups = new Map();
let originalMeshes = 0;
let originalTriangles = 0;
original.traverse(mesh => {
  if (!mesh.isMesh) return;
  assert.ok(!Array.isArray(mesh.material), 'Unexpected multi-material mesh');
  assert.equal(Object.keys(mesh.geometry.morphAttributes).length, 0);
  originalMeshes++;
  let geometry = mesh.geometry.clone();
  if (geometry.index) {
    const indexed = geometry;
    geometry = indexed.toNonIndexed();
    indexed.dispose();
  }
  geometry.applyMatrix4(mesh.matrixWorld);
  // Baking a reflected transform must also reverse winding, as the renderer did previously.
  if (mesh.matrixWorld.determinant() < 0) {
    for (const attribute of Object.values(geometry.attributes)) {
      for (let vertex = 0; vertex < attribute.count; vertex += 3) {
        for (let component = 0; component < attribute.itemSize; component++) {
          const value = attribute.getComponent(vertex + 1, component);
          attribute.setComponent(vertex + 1, component, attribute.getComponent(vertex + 2, component));
          attribute.setComponent(vertex + 2, component, value);
        }
      }
    }
  }
  originalTriangles += geometry.attributes.position.count / 3;
  const bucket = groups.get(mesh.material) ?? [];
  bucket.push(geometry);
  groups.set(mesh.material, bucket);
});
// Index exactly identical vertices; do not simplify, quantize, or alter the surface.
function indexExactVertices(source) {
  const attributes = Object.entries(source.attributes);
  const values = new Map(attributes.map(([name]) => [name, []]));
  const vertices = new Map();
  const indices = [];
  for (let vertex = 0; vertex < source.attributes.position.count; vertex++) {
    const key = attributes.flatMap(([, attribute]) => Array.from({length:attribute.itemSize}, (_, c) => attribute.getComponent(vertex,c))).join(',');
    let index = vertices.get(key);
    if (index === undefined) {
      index = vertices.size;
      vertices.set(key,index);
      for (const [name, attribute] of attributes) {
        for (let c=0;c<attribute.itemSize;c++) values.get(name).push(attribute.getComponent(vertex,c));
      }
    }
    indices.push(index);
  }
  const result = new BufferGeometry();
  for (const [name, attribute] of attributes) result.setAttribute(name,new Float32BufferAttribute(values.get(name),attribute.itemSize));
  result.setIndex(indices);
  for (const [name, attribute] of attributes) {
    for (let vertex = 0; vertex < attribute.count; vertex++) {
      for (let component = 0; component < attribute.itemSize; component++) {
        assert.ok(result.attributes[name].getComponent(indices[vertex], component) === attribute.getComponent(vertex, component), 'Indexing changed a vertex attribute');
      }
    }
  }
  return result;
}
const optimized = new Group();
optimized.name = 'reader_static_material_batches';
for (const [material, geometries] of groups) {
  const merged = mergeGeometries(geometries, false);
  assert.ok(merged, 'Geometry attributes must be compatible');
  optimized.add(new Mesh(indexExactVertices(merged), material));
  merged.dispose();
  geometries.forEach(geometry => geometry.dispose());
}
const before = new Box3().setFromObject(original, true);
const after = new Box3().setFromObject(optimized, true);
assert.ok(before.min.distanceTo(after.min) < 0.0001 && before.max.distanceTo(after.max) < 0.0001, 'Bounds changed');
const triangles = optimized.children.reduce((sum, mesh) => sum + (mesh.geometry.index?.count ?? mesh.geometry.attributes.position.count) / 3, 0);
assert.equal(triangles, originalTriangles, 'Triangle count changed');
const glb = await new GLTFExporter().parseAsync(optimized, { binary: true });
// Check the exported artifact as well as the in-memory model.
const roundtrip = (await new GLTFLoader().parseAsync(glb, '')).scene;
const exportedBounds = new Box3().setFromObject(roundtrip, true);
assert.ok(after.min.distanceTo(exportedBounds.min) < 0.0001 && after.max.distanceTo(exportedBounds.max) < 0.0001);
await writeFile(new URL('reader-optimized.glb', folder), Buffer.from(glb));
console.log(JSON.stringify({originalMeshes, optimizedMeshes:optimized.children.length, triangles, dimensions:after.getSize(new Vector3()).toArray(), bytes:glb.byteLength}));
