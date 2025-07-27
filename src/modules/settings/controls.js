import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class ControlsManager {
  constructor(camera, canvas, options = {}) {
    this.camera = camera;
    this.canvas = canvas;
    this.controls = new OrbitControls(this.camera, this.canvas);

    const defaults = {
      enableDamping: true,
      dampingFactor: 0.05,
    };

    Object.assign(this.controls, { ...defaults, ...options });
  }
}

export default ControlsManager;
