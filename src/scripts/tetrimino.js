import * as THREE from 'three';

class Tetrimino extends THREE.Mesh{
  constructor(x, y) {

    const geometry = new THREE.BoxGeometry( x, y, 1 );
    const material = new THREE.MeshLambertMaterial( { color: 0xDDDDDD } );

    super(geometry, material)
  }

  hello() {
    console.log(this.x, this.y)
  }
}

module.exports = Tetrimino;
