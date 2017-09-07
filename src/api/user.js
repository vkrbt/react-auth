import hostConfig from './config';

const fetchUser = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: localStorage.getItem('token'),
    },
  };
  return fetch(`http://${hostConfig.host}:${hostConfig.port}/user`, config);
};

export default fetchUser;
