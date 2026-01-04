import * as THREE from "three";
import { glassMaterial } from "@materials/glassMaterial";
import { gui, GUIController } from "../settings/gui";

const glassSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const glassSphere = new THREE.Mesh(glassSphereGeometry, glassMaterial);

// gui
const guiObject = new GUIController(glassSphere, { subdivision: 32});
const glassSphereControls = gui.addFolder("Glass Sphere");
glassSphereControls.domElement.classList.add("glass-sphere-controls");
glassSphereControls.add(glassSphere, "visible");
glassSphereControls.add(glassMaterial, "wireframe");
glassSphereControls.add(glassSphere.position, "y").min(-2).max(2).step(0.01);
glassSphereControls.add(glassSphere.position, "z").min(-2).max(2).step(0.01);
glassSphereControls.addColor(guiObject, "color").onChange((v) => glassMaterial.color.set(v));
glassSphereControls.add(guiObject, "spinX").name("spin X");
glassSphereControls.add(guiObject, "spinY").name("spin Y");
glassSphereControls.add(guiObject, "spinZ").name("spin Z");
glassSphereControls
  .add(guiObject, "subdivision")
  .min(1)
  .max(64)
  .step(1)
  .onFinishChange(() => {
    glassSphere.geometry.dispose();
    glassSphere.geometry = new THREE.SphereGeometry(
      1,
      guiObject.subdivision,
      guiObject.subdivision,
    );
  });

export { glassSphere };
