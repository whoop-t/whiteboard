/**
 * TODO: Add Socket.io for live whiteboarding
 * TODO: Create ability to have rooms with users
 * TODO: Create being able to have username
 * TODO: Create private/invite only whiteboard session/rooms
 */

/* Setup the canvas for drawing, using P5 js */
setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

//This will be used to track what mode is selected. e.g draw, erase, etc.
let mode = 0;

/*Will Draw when mode 0 */
/*Will erase when mode 1 */
draw = () => {
  if (mode === 0) {
    cursor('resources/icons8-pencil-24.png');
    drawLine();
  } else if (mode === 1) {
    cursor('resources/icons8-eraser-50.png');
    drawEraser();
  }
};

//Switches to draw mode
const drawMode = () => {
  mode = 0;
};

//Switches to erase mode
const eraseMode = () => {
  mode = 1;
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
  mode = 0;
  clear();
};
