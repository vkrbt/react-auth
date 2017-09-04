import io from 'socket.io-client';

const socket = io.connect('http://localhost:3101');

socket.on('message', (text) => {
  console.log(text);
});

const message = {
  send: text => socket.emit('message', text),
};

export default message;
