import * as THREE from "three";

class Tetrimino extends THREE.Group {
  constructor(x, y, color) {
    super();

    let shape = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (shape[y][x]) {
          const geometry1 = new THREE.BoxGeometry(0.9, 0.9, 0.8);
          const geometry2 = new THREE.BoxGeometry(0.7, 0.7, 1);
          const material = new THREE.MeshPhongMaterial({ color: color });
          const box1 = new THREE.Mesh(geometry1, material);
          const box2 = new THREE.Mesh(geometry2, material);
          box1.position.set(x-1, y-1, 0);
          box2.position.set(x-1, y-1, 0);
          this.add(box1);
          this.add(box2);
        }
      }
    }

    this.position.set(x, y, 0);
  }
}

module.exports = Tetrimino;
