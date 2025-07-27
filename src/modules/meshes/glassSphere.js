import * as THREE from "three";
import { glassMaterial } from "@materials/glassMaterial";

const glassSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const glassSphere = new THREE.Mesh(glassSphereGeometry, glassMaterial);

export { glassSphere };
