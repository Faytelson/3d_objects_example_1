import * as THREE from "three";
import { ambientLight, pointLight, directionalLight } from "./lights";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import GUI from "lil-gui";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// meshes
import { marbleSphere } from "./objects/marble_sphere";

// Canvas
const canvas = document.querySelector("canvas.webgl");

//  Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.y = 3;
camera.position.z = 3;

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Scene
const scene = new THREE.Scene();
scene.add(camera);
scene.add(ambientLight);
scene.add(pointLight);
scene.add(directionalLight);
scene.add(marbleSphere);

//  Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//  Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // update meshes
  // my code

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
