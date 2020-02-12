/**
 * TODO: Add Socket.io for live whiteboarding
 * TODO: Create ability to have rooms with users
 * TODO: Create being able to have username
 * TODO: Create private/invite only whiteboard session/rooms
 */

/**
 * Socket Connection
 */
const socket = io.connect('http://localhost:4000');

/* Setup the canvas for drawing, using P5 js */
setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
};

socket.on('draw', data => {
  strokeWeight(5);
  stroke(0);
  line(data.x, data.y, data.pX, data.pY);
});
socket.on('erase', data => {
  strokeWeight(100);
  stroke(255);
  line(data.x, data.y, data.pX, data.pY);
});
socket.on('clear', () => {
  clearCanvas();
});

//This will be used to track what mode is selected. e.g draw, erase, etc.
let mode = 0;

/*Will Draw when mode 0 */
/*Will erase when mode 1 */
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
 * Functions for opening and closing the hamburger menu on mobile
 * **/

function w3_open() {
  document.getElementById('mySidebar').style.display = 'block';
}

function w3_close() {
  document.getElementById('mySidebar').style.display = 'none';
}

/////////

// let canvas = document.getElementById('canvas'),
//   handle = document.getElementById('handle'),
//   btn = document.getElementById('send'),
//   output = document.getElementById('output'),
//   feedback = document.getElementById('feedback');

// Emit events
// btn.addEventListener('click', () => {
//   socket.emit('canvas', {
//     canvas: canvas.value,
//     handle: handle.value
//   });
// });

// message.addEventListener('mousepress', () => {
//   socket.emit('drawing', handle.value);
// });

// // Listen for events
// socket.on('chat', data => {
//   feedback.innerHTML = '';
//   output.innerHTML +=
//     '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
// });

// socket.on('typing', data => {
//   feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
// });
