import { createTexture } from "../utils/createTexture";

const options = [
  { name: "color", ext: "jpg" },
  { name: "ambientOcclusion", ext: "jpg" },
  { name: "height", ext: "png" },
  { name: "normal", ext: "jpg" },
  { name: "roughness", ext: "jpg" },
];

const glass = createTexture("glass", options);

export { glass };
