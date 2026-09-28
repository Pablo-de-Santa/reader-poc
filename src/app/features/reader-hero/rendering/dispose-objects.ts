import { BufferGeometry, Material, Object3D, ShaderMaterial, Texture } from 'three';

/** Release resources owned by a scene, including resources shared by clones. */
export function disposeObjects(roots: readonly (Object3D | undefined)[]): void {
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();

  for (const root of roots) {
    root?.traverse(object => {
      const renderable = object as Object3D & {
        geometry?: BufferGeometry;
        material?: Material | Material[];
      };
      if (renderable.geometry) geometries.add(renderable.geometry);
      if (renderable.material) {
        for (const material of Array.isArray(renderable.material) ? renderable.material : [renderable.material]) {
          materials.add(material);
        }
      }
    });
  }

  for (const material of materials) {
    for (const value of Object.values(material)) {
      if (value instanceof Texture) textures.add(value);
    }
    if (material instanceof ShaderMaterial) {
      for (const uniform of Object.values(material.uniforms)) {
        const values = Array.isArray(uniform.value) ? uniform.value : [uniform.value];
        for (const value of values) if (value instanceof Texture) textures.add(value);
      }
    }
  }
  geometries.forEach(geometry => geometry.dispose());
  materials.forEach(material => material.dispose());
  textures.forEach(texture => texture.dispose());
}
