import * as THREE from "three";

class Tetrimino extends THREE.Group {
  constructor(x, y) {
    super();

    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const material = new THREE.MeshLambertMaterial({ color: 0xdddddd });
        const box = new THREE.Mesh(geometry, material);
        box.position.set(x, y, 0);
        this.add(box);
      }
    }

    this.position.set(x, y, 0);
  }
}

module.exports = Tetrimino;
