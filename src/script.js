import * as THREE from 'three';
import Tetrimino from './scripts/tetrimino';

const canvasWidth = 300
const canvasHeight = 600

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, canvasWidth /canvasHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvasWidth,canvasHeight );
document.getElementById("canvas").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0xDDDDDD } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const spotlight = new THREE.DirectionalLight({ color: 0x00FFFF})
spotlight.position.set(1,1,4)
scene.add(spotlight)

// const light = new THREE.AmbientLight({color: 0xFFF, intensity: 0.1})
// scene.add(light)

camera.position.z = 10;

cube.position.set(3,6,0)

const t = new Tetrimino(1,1)
scene.add(t)

function animate() {
	requestAnimationFrame( animate );


	renderer.render( scene, camera );
}

animate();