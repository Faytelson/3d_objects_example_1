import * as THREE from "three";
import { marble } from "../textures/marble";

const marbleMaterial = new THREE.MeshPhysicalMaterial();
marbleMaterial.map = marble.colorTexture;
marbleMaterial.normalMap = marble.normalTexture;
marbleMaterial.metalnessMap = marble.metalnessTexture;
marbleMaterial.roughnessMap = marble.roughnessTexture;
marbleMaterial.ior = 1.5;

export { marbleMaterial };
