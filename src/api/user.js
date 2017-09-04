const fetchUser = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: localStorage.getItem('token'),
    },
  };
  return fetch('http://localhost:3101/user', config);
};

export default fetchUser;
