const express = require('express');
const socket = require('socket.io');

//Setting up server
const app = express();
const server = app.listen(4000, () => {
  console.log('Listening on port 4000...');
});

//Static files
app.use(express.static('../public'));

//Socket Setup
const io = socket(server);

io.on('connection', socket => {
  console.log(`Made connection...Socket Id: ${socket.id}`);
});
