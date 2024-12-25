import * as THREE from "three";
import { createTexture } from "../utils/createTexture";

const options = [
  { name: "color", ext: "png" },
  { name: "ambientOcclusion", ext: "png" },
  { name: "height", ext: "png" },
  { name: "normal", ext: "png" },
  { name: "roughness", ext: "png" },
];

const fluffy = createTexture("fluffy", options);

// color
fluffy.colorTexture.colorSpace = THREE.SRGBColorSpace;
fluffy.colorTexture.minFilter = THREE.NearestFilter;

export { fluffy };
