import io from 'socket.io-client';

const socket = io.connect('http://localhost:3101', {
  query: {
    token: localStorage.token,
  },
});


socket.on('message', (text) => {
  console.log(text);
});

const message = {
  send: text => socket.emit('message', text),
};

socket.emit('history');
socket.on('history', (messages) => {
  console.log(messages);
});


export default message;
