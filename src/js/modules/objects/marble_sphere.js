import * as THREE from "three";
import { marbleMaterial } from "../materials/marbleMaterial";

const marbleSphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const marbleSphere = new THREE.Mesh(marbleSphereGeometry, marbleMaterial);
marbleSphere.position.x = -4.5;

export { marbleSphere };
