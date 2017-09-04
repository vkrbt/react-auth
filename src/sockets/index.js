import io from 'socket.io-client';

const socket = io.connect('http://localhost:3101');

socket.on('connected', (msg) => {
  console.log(msg);
});

socket
  .emit('authenticate', {
    token: localStorage.token,
  });

export default socket;
