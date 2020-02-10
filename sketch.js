setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

draw = () => {
  if (mouseIsPressed) {
    strokeWeight(5);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (keyIsPressed && key == 'e') {
    drawEraser();
  }
};

const drawEraser = () => {
  strokeWeight(100);
  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
};
