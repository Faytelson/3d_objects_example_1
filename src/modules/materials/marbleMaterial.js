import * as THREE from "three";
import { marble } from "@textures/marble";

const marbleMaterial = new THREE.MeshPhysicalMaterial({
  ior: 1.5,
  // применяем текстуры:
  map: marble.colorTexture,
  normalMap: marble.normalTexture,
  roughnessMap: marble.roughnessTexture,
  metalnessMap: marble.metalnessTexture,
});

export { marbleMaterial };
