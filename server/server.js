require('dotenv').config();
const express = require('express');
const socket = require('socket.io');

//Setting up server
const app = express();
const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});

//Static files
app.use(express.static('../public'));

//Socket Setup
const io = socket(server);

io.on('connection', socket => {
  console.log(`Made connection...Socket Id: ${socket.id}`);
  // Handle drawing event and braodcast to others connected
  socket.on('draw', data => {
    socket.broadcast.emit('draw', data);
  });
  // Handle erasing event and braodcast to others connected
  socket.on('erase', data => {
    socket.broadcast.emit('erase', data);
  });
  // Handle clear event and braodcast to others connected
  socket.on('clear', () => {
    socket.broadcast.emit('clear');
  });
});
