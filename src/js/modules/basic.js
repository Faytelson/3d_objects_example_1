import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

// Canvas
export const canvas = document.querySelector("canvas.webgl");

// Scene
export const scene = new THREE.Scene();

//  Sizes
export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
