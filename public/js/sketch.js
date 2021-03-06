/**
 * TODO: Create ability to have rooms with users
 * TODO: Create being able to have username
 * TODO: Create private/invite only whiteboard session/rooms
 */

/**
 * Socket Connection
 */
const socket = io();

/* Setup the canvas for drawing, using P5 js */
setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};
//socket.on will be called on successful emit received
socket.on('draw', data => {
  strokeWeight(5);
  stroke(color(102, 0, 255));
  line(data.x, data.y, data.pX, data.pY);
});
socket.on('erase', data => {
  strokeWeight(100);
  stroke(255);
  line(data.x, data.y, data.pX, data.pY);
});
socket.on('clear', () => {
  clear();
});

//This will be used to track what mode is selected. e.g draw, erase, etc.
/*Will Draw when mode 0 */
/*Will erase when mode 1 */
let mode = 0;

draw = () => {
  if (mode === 0) {
    cursor('../resources/icons8-pencil-24.png');
    drawLine();
  } else if (mode === 1) {
    cursor('../resources/icons8-eraser-50.png');
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
    let data = {
      x: mouseX,
      y: mouseY,
      pX: pmouseX,
      pY: pmouseY
    };

    socket.emit('draw', data);

    strokeWeight(5);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
};

//Function for erasing style
const drawEraser = () => {
  if (mouseIsPressed) {
    let data = {
      x: mouseX,
      y: mouseY,
      pX: pmouseX,
      pY: pmouseY
    };

    socket.emit('erase', data);

    strokeWeight(100);
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
};

//Function for clearing canvas
const clearCanvas = () => {
  mode = 0;
  socket.emit('clear');
  clear();
};

//!
/**
 * Functions for opening and closing the hamburger menu small displays
 * **/

function w3_open() {
  document.getElementById('mySidebar').style.display = 'block';
}

function w3_close() {
  document.getElementById('mySidebar').style.display = 'none';
}
