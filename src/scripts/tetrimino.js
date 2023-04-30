import * as THREE from "three";
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
import Block from "./block"
import shapes from '../assets/shapes.json'

console.log(shapes[0])

class Tetrimino extends THREE.Group {
  constructor(x, y, color) {
    super();

    let shape = shapes[1]


    const geometry1 = new Block(1,0.75,.1);
    const geometry2 = new THREE.BoxGeometry(0.6, 0.6, 1);
    const geometry3 = new THREE.BoxGeometry(0.6, 1, 0.6);
    const geometry4 = new THREE.BoxGeometry(1, 0.6, 0.6);

    const material = new THREE.MeshNormalMaterial({ color: 0xff0000 });
    const material2 = new THREE.MeshPhongMaterial({ color: 0xff0000 });

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (shape[y][x]) {
          const box1 = new THREE.Mesh(geometry1, material);

          // const box2 = new THREE.Mesh(geometry2, material);
          // const box3 = new THREE.Mesh(geometry3, material);
          // const box4 = new THREE.Mesh(geometry4, material);

          box1.castShadow = true;
          box1.position.set(x - 1, y - 1, 0);
          // box2.position.set(x - 1, y - 1, 0);
          // box3.position.set(x - 1, y - 1, 0);
          // box4.position.set(x - 1, y - 1, 0);
          this.add(box1);
          // this.add(box2);
          // this.add(box3);
          // this.add(box4);
        }
      }
    }
    this.position.set(x, y, 0);

  }

  move(x, z) {
    this.position.x += x;
    this.position.z += z;
  }

  rotate(x, y, z) {
    let quaternion = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(x, y, z),
      Math.PI / 2
    );
    this.applyQuaternion(quaternion)
  }


}

module.exports = Tetrimino;
