/* Setup the canvas for drawing, using P5 js */
setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

/*Will Draw when you hold the mouse button down */
/*Will erase when you hold e on keyboard */
draw = () => {
  if (mouseIsPressed) {
    drawLine();
  } else if (keyIsPressed && key == 'e') {
    drawEraser();
  }
};

//Function for drawing style
const drawLine = () => {
  strokeWeight(5);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
};

//Function for erasing style
const drawEraser = () => {
  strokeWeight(100);
  stroke(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
};
