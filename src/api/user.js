import hostConfig from './config';
import storage from '../storage';

const fetchUser = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: storage.getToken(),
    },
  };
  return fetch(`http://${hostConfig.host}:${hostConfig.port}/user`, config);
};

export default fetchUser;
