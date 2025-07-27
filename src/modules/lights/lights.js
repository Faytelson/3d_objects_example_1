import * as THREE from "three";

const ambientLight = new THREE.AmbientLight(0xffeeee, 1);

const directionalLight = new THREE.DirectionalLight(0xffeeee, 0.5);

const pointLight = new THREE.PointLight(0xffeeee, 60);
pointLight.position.x = 5;
pointLight.position.y = 5;
pointLight.position.z = -5;

export { ambientLight, pointLight, directionalLight };
