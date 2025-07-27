import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class ControlsManager {
  constructor(camera, canvas, enableDamping = true) {
    this.camera = camera;
    this.canvas = canvas;
    this.controls = new OrbitControls(this.camera, this.canvas);

    if (enableDamping) {
      this.controls.enableDamping = true;
    }
  }
}

export default ControlsManager;
