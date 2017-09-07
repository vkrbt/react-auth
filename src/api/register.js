import { stringify } from 'query-string';
import hostConfig from './config';

const register = (name, password) => {
  const query = { name, password };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify(query),
  };
  return fetch(`http://${hostConfig.host}:${hostConfig.port}/register`, config);
};

export default register;
