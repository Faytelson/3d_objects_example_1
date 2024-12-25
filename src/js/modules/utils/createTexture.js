import * as THREE from "three";
import { loadingManager } from "./loadingManagers";

const textureLoader = new THREE.TextureLoader(loadingManager);

function createTexture(object, options) {
  const texturesToCreate = {};
  options.forEach((elem) => {
    let texture = textureLoader.load(
      `textures/${object}/${elem.name}.${elem.ext}`
    );
    let propName = `${elem.name}Texture`;
    texturesToCreate[propName] = texture;
  });
  return texturesToCreate;
}

export { createTexture };
