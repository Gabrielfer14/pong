const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const crypto = require('crypto');

app.use(express.static('public'));

const players = [];

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('updatePaddle', (data) => {
    if (data.player === 'left') {
      leftPaddleY = data.y;
    } else if (data.player === 'right') {
      rightPaddleY = data.y;
    }
    socket.broadcast.emit('updatePaddle', data);
  });

  socket.on('updateBall', (data1) => {
    ballX = data1.x;
    ballY = data1.y;
    socket.broadcast.emit('updateBall', data1);
  });

  socket.on('updateScore', (data2) => {
    score1 = data2.x;
    score2 = data2.y;
    socket.broadcast.emit('updateScore', data2);
  });
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
