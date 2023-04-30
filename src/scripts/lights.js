import * as THREE from "three";

class Lights extends THREE.Group {
  constructor() {
    super();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this.add(ambientLight);

    // const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0000ff, .2)
    // this.add(hemisphereLight)

    // const spotlight1 = new THREE.SpotLight(0xffffff, 0.6);
    // spotlight1.position.set(4, 1, 4)
    // spotlight1.target.position.set(0, 8, 0)
    // const helper1 = new THREE.SpotLightHelper(spotlight1)
    // //this.add(spotlight1);
    // //this.add(helper1)

    const spotlight2 = new THREE.SpotLight(0xffffff, 0.4);
    spotlight2.position.set(8, 8, 0);
    this.add(spotlight2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.castShadow = true;
    directionalLight.position.set(0, 10, 0);
    this.add(directionalLight);
  }
}

module.exports = Lights;
