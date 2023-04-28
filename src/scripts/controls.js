function control(obj) {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "d":
        obj.position.x += 1;
        break;
      case "a":
        obj.position.x -= 1;
        break;
      case "e":
        obj.rotation.z += Math.PI / 2;
        break;
      case "q":
        obj.rotation.z -= Math.PI / 2;
        break;
      case "s":
        obj.position.y -= 1;
        break;
    }
  });
}

module.exports = control;
