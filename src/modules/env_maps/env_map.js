import { cubeTextureLoader } from "@loaders/cubeTextureLoader";

const paths = [
  require("@public/environment_map/cube_map/px.png"),
  require("@public/environment_map/cube_map/nx.png"),
  require("@public/environment_map/cube_map/py.png"),
  require("@public/environment_map/cube_map/ny.png"),
  require("@public/environment_map/cube_map/pz.png"),
  require("@public/environment_map/cube_map/nz.png"),
];

export const envMap = cubeTextureLoader.load(paths);
