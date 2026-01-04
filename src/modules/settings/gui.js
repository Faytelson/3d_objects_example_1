import GUI from "lil-gui";
import gsap from "gsap";

const gui = new GUI({ width: 300, title: "Tweak values", closeFolders: true });

class GUIController {
  constructor(mesh, options = {}) {
    this.mesh = mesh;

    this.color = options.color ?? 0xffffff;
    this.subdivision = options.subdivision ?? 2;
  }

  spinX() {
    gsap.to(this.mesh.rotation, {
      x: this.mesh.rotation.x + Math.PI / 2,
    });
  }

  spinY() {
    gsap.to(this.mesh.rotation, {
      y: this.mesh.rotation.y + Math.PI / 2,
    });
  }

  spinZ() {
    gsap.to(this.mesh.rotation, {
      z: this.mesh.rotation.z + Math.PI / 2,
    });
  }
}

export { gui, GUIController };
