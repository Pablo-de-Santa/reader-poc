import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** Scene-owned, immutable geometry. Mesh transforms and materials remain independent. */
export class RoundedGeometryCache {
  private readonly geometries = new Map<string, RoundedBoxGeometry>();

  get(size: readonly [number, number, number], radius: number): RoundedBoxGeometry {
    const key = [...size, radius].join(':');
    let geometry = this.geometries.get(key);
    if (!geometry) {
      geometry = new RoundedBoxGeometry(size[0], size[1], size[2], 10, radius);
      this.geometries.set(key, geometry);
    }
    return geometry;
  }

  /** disposeObjects releases scene resources once, including shared geometries. */
  clear(): void {
    this.geometries.clear();
  }
}
