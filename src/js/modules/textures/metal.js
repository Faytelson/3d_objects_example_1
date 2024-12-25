import { createTexture } from "../utils/createTexture";

const options = [
  { name: "color", ext: "png" },
  { name: "ambientOcclusion", ext: "png" },
  { name: "height", ext: "png" },
  { name: "normal", ext: "png" },
  { name: "roughness", ext: "png" },
  { name: "metalness", ext: "png" },
  { name: "alpha", ext: "png" },
];

const metal = createTexture("metal", options);

export { metal };
