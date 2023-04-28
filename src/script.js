import * as THREE from "three";
import Tetrimino from "./scripts/tetrimino";
import control from "./scripts/controls";

const canvasWidth = 300;
const canvasHeight = 600;
const framesPerTick = 100;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvasWidth / canvasHeight,
  0.1,
  1000
);
camera.position.set(4,8,12)


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(canvasWidth, canvasHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2)
scene.add(ambientLight)

const spotlight = new THREE.DirectionalLight(0xffffff, 1);
spotlight.position.set(8, 16, 4);
spotlight.target.position.set(4,1,1)
scene.add(spotlight);

const points = []
points.push( new THREE.Vector3(0,0,1))
points.push( new THREE.Vector3(0,16,1))
points.push( new THREE.Vector3(8,16,1))
points.push( new THREE.Vector3(8,0,1))
points.push( new THREE.Vector3(0,0,1))
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
const line = new THREE.Line( geometry, material );
scene.add(line)

let activeTetrimino = new Tetrimino(4, 16, 0xFF0000);
control(activeTetrimino)
scene.add(activeTetrimino);

function animate() {
  tick++;
  if (tick >= framesPerTick) {
    tick = 0;
    activeTetrimino.position.y -= 1;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

let tick = 0;
renderer.render(scene, camera);
animate();
