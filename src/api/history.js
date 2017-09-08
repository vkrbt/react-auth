import hostConfig from './config';
import storage from '../storage';

const fetchHistory = (begin, limit) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: storage.getToken(),
    },
  };
  return fetch(`http://${hostConfig.host}:${hostConfig.port}/history/${begin}/${limit}`, config);
};

export default fetchHistory;
