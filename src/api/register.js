import { stringify } from 'query-string';

const register = (name, password) => {
  const query = { name, password };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify(query),
  };
  return fetch('http://localhost:3101/register', config);
};

export default register;
