/* Setup the canvas for drawing, using P5 js */
setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

//This will be used to track what mode is selected. e.g draw, erase, etc.
let mode = 0;

/*Will Draw when you hold the mouse button down */
/*Will erase when you hold e on keyboard */
//keyIsPressed && key == 'e') ||
draw = () => {
  if (mode === 0) {
    drawLine();
  } else if (mode === 1) {
    drawEraser();
  }
};

const drawMode = () => {
  mode = 0;
};
const eraseMode = () => {
  mode = 1;
  console.log(mode);
};

//Function for drawing style
const drawLine = () => {
  if (mouseIsPressed) {
    strokeWeight(5);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
};

//Function for erasing style
const drawEraser = () => {
  if (mouseIsPressed) {
    strokeWeight(100);
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
};

//Function for clearing canvas
const clearCanvas = () => {
  clear();
};
