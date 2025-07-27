import * as THREE from "three";
import { marbleMaterial } from "@materials/marbleMaterial";

const marbleBoxGeometry = new THREE.BoxGeometry(2, 2, 2);

const marbleBox = new THREE.Mesh(marbleBoxGeometry, marbleMaterial);
marbleBox.position.x = -4.5;

export { marbleBox };
