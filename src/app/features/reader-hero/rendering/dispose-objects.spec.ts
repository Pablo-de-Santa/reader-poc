import { describe, expect, it, vi } from 'vitest';
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, ShaderMaterial, Texture } from 'three';
import { disposeObjects } from './dispose-objects';

describe('scene resource cleanup', () => {
  it('releases shared and detached resources once, including shader textures', () => {
    const geometry = new BoxGeometry();
    const texture = new Texture();
    const material = new MeshBasicMaterial({ map: texture });
    const shader = new ShaderMaterial({ uniforms: { map: { value: texture } } });
    const scene = new Group();
    const mesh = new Mesh(geometry, [material, shader]);
    scene.add(mesh, mesh.clone());
    const detached = mesh.clone();
    const disposals = [geometry, texture, material, shader].map(resource => vi.spyOn(resource, 'dispose'));

    disposeObjects([scene, detached, undefined]);

    for (const dispose of disposals) expect(dispose).toHaveBeenCalledTimes(1);
  });
});
