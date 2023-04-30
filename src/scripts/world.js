import * as THREE from "three";

class World extends THREE.Group {
  constructor() {
    super()

    const caseGeometry = new THREE.BoxGeometry(8,16,8)
    const caseMaterial = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.15})
    const caseMesh = new THREE.Mesh(caseGeometry,caseMaterial)
    caseMesh.position.y = .5
    this.add(caseMesh)

    const floorGeometry = new THREE.BoxGeometry(8, 1, 8)
    const loader = new THREE.TextureLoader();
    const imageUrl = new URL(
      './marble.jpg?as=webp&width=250',
      import.meta.url
    );


    const floorMaterial = new THREE.MeshPhongMaterial({
      map: loader.load(imageUrl),
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.position.y = -8
    floor.receiveShadow = true
    this.add(floor)
  }

}

module.exports = World