import { textureLoader } from "@loaders/textureLoader";

function createTexture(materialName, options) {
  const texturesToCreate = {};
  options.forEach((option) => {
    const url = new URL(
      `../../../public/textures/${materialName}/${option.name}.${option.ext}`,
      import.meta.url,
    );
    let texture = textureLoader.load(url);
    let propName = `${option.name}Texture`;
    texturesToCreate[propName] = texture;
  });
  return texturesToCreate;
}

export { createTexture };
