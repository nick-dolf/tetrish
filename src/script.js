import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Tetrimino from "./scripts/tetrimino";
import Lights from "./scripts/lights";
import World from "./scripts/world";
import control from "./scripts/controls";

const beep = new URL(
  'assets/sound46.mp3',
  import.meta.url
);

const myAudio = document.createElement("audio");
myAudio.src = beep;



const canvasWidth = 400;
const canvasHeight = 600;
const framesPerTick = 400;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvasWidth / canvasHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 17);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true
renderer.setSize(canvasWidth, canvasHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

const lights = new Lights()
scene.add(lights)
scene.add(new World());

let activeTetrimino = new Tetrimino(0, 3, 0xff0000);

scene.add(activeTetrimino);


control(activeTetrimino,camera);



function animate() {
  tick++;
  if (tick >= framesPerTick) {
    tick = 0;
    activeTetrimino.position.y -= 1;
    myAudio.play();
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

let tick = 0;
renderer.render(scene, camera);
animate();
