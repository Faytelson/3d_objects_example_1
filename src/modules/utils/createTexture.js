import { textureLoader } from "@loaders/textureLoader";

function createTexture(materialName, options) {
  const texturesToCreate = {};
  options.forEach((option) => {
    let texture = textureLoader.load(`textures/${materialName}/${option.name}.${option.ext}`);
    let propName = `${option.name}Texture`;
    texturesToCreate[propName] = texture;
  });
  return texturesToCreate;
}

export { createTexture };
