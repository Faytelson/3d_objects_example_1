import * as THREE from "three";

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

const pointLight = new THREE.PointLight(0xffffff, 60);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 5;

export { ambientLight, pointLight, directionalLight };
