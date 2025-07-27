import * as THREE from "three";

class AnimationManager {
  constructor(scene, camera, renderer, controls) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;
    this.clock = new THREE.Clock();
  }

  tick() {
    const elapsedTime = this.clock.getElapsedTime();

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(() => this.tick());
  }
}

export default AnimationManager;
