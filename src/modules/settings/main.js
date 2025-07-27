import * as THREE from "three";
import AnimationManager from "@animations/AnimationManager";
import ControlsManager from "@settings/controls";
import { ambientLight, pointLight, directionalLight } from "@lights/lights";
import { marbleBox } from "@meshes/marble_box";
import { glassSphere } from "@meshes/glassSphere";
import { envMap } from "@env_maps/env_map";
// import GUI from "lil-gui";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();
scene.background = envMap;

// Camera
const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 1, 100);
camera.position.x = 9;
camera.position.y = 1;
camera.position.z = 4;
scene.add(camera);

//  Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Meshes
marbleBox.position.set(0, 0, 0);
glassSphere.position.set(3, 0, 0);
scene.add(marbleBox);
scene.add(glassSphere);
// исправить искажение объектов при ресайзе, выяснить, с чем связано

//  Lights
scene.add(ambientLight);
scene.add(pointLight);
scene.add(directionalLight);

// Controls
const controlsManager = new ControlsManager(camera, canvas);
const controls = controlsManager.controls;

//  Animate
const animationManager = new AnimationManager(scene, camera, renderer, controls);
animationManager.tick();

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
