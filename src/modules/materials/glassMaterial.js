import * as THREE from "three";
import { glass } from "@textures/glass";

const glassMaterial = new THREE.MeshPhysicalMaterial({
  metalness: 0,
  roughness: 0.03,
  transmission: 0.95,
  transparent: true,
  opacity: 0.85,
  ior: 1.52,
  thickness: 0.3,
  specularIntensity: 1,
  envMapIntensity: 1,
  reflectivity: 0.6,
  clearcoat: 1,
  clearcoatRoughness: 0.05,
  sheen: 0,
});

export { glassMaterial };
