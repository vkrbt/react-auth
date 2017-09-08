import io from 'socket.io-client';
import hostConfig from '../api/config';
import storage from '../storage';

const socket = io(`http://${hostConfig.host}:${hostConfig.port}`, {
  query: {
    token: storage.getToken(),
  },
});

export default socket;
