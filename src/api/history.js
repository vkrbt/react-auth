import hostConfig from './config';

const fetchHistory = (begin, limit) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: localStorage.getItem('token'),
    },
  };
  return fetch(`http://${hostConfig.host}:${hostConfig.port}/history/${begin}/${limit}`, config);
};

export default fetchHistory;
