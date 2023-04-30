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
    const floorMaterial = new THREE.MeshToonMaterial()
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.position.y = -8
    floor.receiveShadow = true
    this.add(floor)
  }

}

module.exports = World