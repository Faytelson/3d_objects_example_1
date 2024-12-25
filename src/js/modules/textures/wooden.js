import * as THREE from "three";
import { createTexture } from "../utils/createTexture";

const options = [
  { name: "color", ext: "png" },
  { name: "ambientOcclusion", ext: "png" },
  { name: "height", ext: "png" },
  { name: "normal", ext: "png" },
  { name: "roughness", ext: "png" },
  { name: "metalness", ext: "png" },
];

const wooden = createTexture("wooden", options);

// color
wooden.colorTexture.colorSpace = THREE.SRGBColorSpace;
wooden.colorTexture.minFilter = THREE.NearestFilter;

export { wooden };
