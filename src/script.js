import * as THREE from "three";
import Tetrimino from "./scripts/tetrimino";

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

const renderer = new THREE.WebGLRenderer();
renderer.setSize(canvasWidth, canvasHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

const spotlight = new THREE.DirectionalLight({ color: 0x00ffff });
spotlight.position.set(1, 1, 4);
scene.add(spotlight);

// const light = new THREE.AmbientLight({color: 0xFFF, intensity: 0.1})
// scene.add(light)

camera.position.z = 10;

let activeTetrimino = new Tetrimino(0, 3);
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

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      activeTetrimino.position.x += 1;
      break;
    case "a":
      activeTetrimino.position.x -= 1;
      break;
    case "s":
      activeTetrimino.position.y -= 1;
      tick = 0
			break;
  }
});
