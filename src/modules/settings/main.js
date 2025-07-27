import * as THREE from "three";
import AnimationManager from "@animations/AnimationManager";
import ControlsManager from "@settings/controls";
import { ambientLight, pointLight, directionalLight } from "@lights/lights";
import { marbleSphere } from "@meshes/marble_sphere";
import { glassCube } from "@meshes/glassCube";
// import GUI from "lil-gui";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 1, 100);
camera.position.y = 0;
camera.position.z = 7;
scene.add(camera);

//  Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Meshes
marbleSphere.position.set(0, 0, 0);
glassCube.position.set(3, 0, 0);
scene.add(marbleSphere);
scene.add(glassCube);
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
