import { cubeTextureLoader } from "@loaders/cubeTextureLoader";

const paths = [
  require("@static/environment_map/cube_map/px.png"),
  require("@static/environment_map/cube_map/nx.png"),
  require("@static/environment_map/cube_map/py.png"),
  require("@static/environment_map/cube_map/ny.png"),
  require("@static/environment_map/cube_map/pz.png"),
  require("@static/environment_map/cube_map/nz.png"),
];

export const envMap = cubeTextureLoader.load(paths);
