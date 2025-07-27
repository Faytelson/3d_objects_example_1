import * as THREE from "three";
import { glassMaterial } from "@materials/glassMaterial";

const glassCubeGeometry = new THREE.BoxGeometry(1.3, 1.3, 1.3);
const glassCube = new THREE.Mesh(glassCubeGeometry, glassMaterial);

export { glassCube };
