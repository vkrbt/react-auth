import { stringify } from 'query-string';

const fetchLogin = (name, password) => {
  const query = { name, password };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify(query),
  };
  return fetch('http://localhost:3101/login', config);
};

export default fetchLogin;
