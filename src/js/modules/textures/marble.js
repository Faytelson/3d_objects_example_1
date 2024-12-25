import * as THREE from "three";
import { createTexture } from "../utils/createTexture";

const options = [
  { name: "color", ext: "jpg" },
  { name: "normal", ext: "png" },
  { name: "roughness", ext: "jpg" },
  { name: "metalness", ext: "jpg" },
];

const marble = createTexture("marble", options);

// color
marble.colorTexture.colorSpace = THREE.SRGBColorSpace;
marble.colorTexture.minFilter = THREE.NearestFilter;
marble.colorTexture.magFilter = THREE.LinearFilter;

export { marble };
