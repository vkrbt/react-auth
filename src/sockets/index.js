import io from 'socket.io-client';
import { socketsConnect, socketsMessageReceive, socketsHistoryReceive } from '../actions/sockets';
import fetchHistory from '../api/history';
import hostConfig from '../api/config';

const socket = io.connect(`http://${hostConfig.host}:${hostConfig.port}`, {
  query: {
    token: localStorage.token,
  },
});

const dispatchHistory = async (dispatch) => {
  try {
    const res = await fetchHistory(0, 50);
    if (res.ok) {
      const history = await res.json();
      dispatch(socketsHistoryReceive(history.messages));
    }
  } catch (err) {
    console.error(err);
  }
};

const subscribe = socket => (dispatch) => {
  socket.on('connected', () => {
    dispatch(socketsConnect());
    dispatchHistory(dispatch);
  });
  socket.on('message', (message) => {
    dispatch(socketsMessageReceive(message));
  });
};

export default socket;
export { subscribe };
