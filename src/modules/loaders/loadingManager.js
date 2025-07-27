import * as THREE from "three";

const loadingManager = new THREE.LoadingManager();

loadingManager.onLoad = function () {
  console.log("Loading complete!");
};

loadingManager.onError = function (url) {
  console.log("There was an error loading " + url);
};

export { loadingManager };
