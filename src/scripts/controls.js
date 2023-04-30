function control(tetrimino, camera) {
  document.addEventListener("keypress", (event) => {
    const camX = camera.position.x;
    const camZ = camera.position.z;

    switch (event.key) {
      case "w":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.move(-1, 0);
          } else {
            tetrimino.move(1, 0);
          }
        } else {
          if (camZ > 0) {
            tetrimino.move(0, -1);
          } else {
            tetrimino.move(0, 1);
          }
        }
        break;
      case "s":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.move(1, 0);
          } else {
            tetrimino.move(-1, 0);
          }
        } else {
          if (camZ > 0) {
            tetrimino.move(0, 1);
          } else {
            tetrimino.move(0, -1);
          }
        }
        break;
      case "a":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.move(0, 1);
          } else {
            tetrimino.move(0, -1);
          }
        } else {
          if (camZ > 0) {
            tetrimino.move(-1, 0);
          } else {
            tetrimino.move(1, 0);
          }
        }
        break;
      case "d":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.move(0, -1);
          } else {
            tetrimino.move(0, 1);
          }
        } else {
          if (camZ > 0) {
            tetrimino.move(1, 0);
          } else {
            tetrimino.move(-1, 0);
          }
        }
        break;
      case "e":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.rotate(-1, 0, 0);
          } else {
            tetrimino.rotate(1, 0, 0);
          }
        } else {
          if (camZ > 0) {
            tetrimino.rotate(0, 0, -1);
          } else {
            tetrimino.rotate(0, 0, 1);
          }
        }
        break;
      case "q":
        if (Math.abs(camX) > Math.abs(camZ)) {
          if (camX > 0) {
            tetrimino.rotate(1, 0, 0);
          } else {
            tetrimino.rotate(-1, 0, 0);
          }
        } else {
          if (camZ > 0) {
            tetrimino.rotate(0, 0, 1);
          } else {
            tetrimino.rotate(0, 0, -1);
          }
        }
        break;
      case " ":
        tetrimino.position.y -= 1;
        break;
    }
  });
}

module.exports = control;
