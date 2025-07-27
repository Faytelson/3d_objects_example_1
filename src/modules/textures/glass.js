import * as THREE from 'three';
import { createTexture } from "@utils/createTexture";

const options = [
  { name: "color", ext: "jpg" },
  { name: "ambientOcclusion", ext: "jpg" },
  { name: "height", ext: "png" },
  { name: "normal", ext: "jpg" },
  { name: "roughness", ext: "jpg" },
];

const glass = createTexture("glass", options);

const colorTexture = glass.colorTexture;
colorTexture.colorSpace = THREE.SRGBColorSpace;
colorTexture.generateMipmaps = false;
colorTexture.minFilter = THREE.NearestFilter;
colorTexture.magFilter = THREE.NearestFilter;

export { glass };
