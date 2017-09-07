const fetchHistory = (begin, limit) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: localStorage.getItem('token'),
    },
  };
  return fetch(`http://localhost:3101/history/${begin}/${limit}`, config);
};

export default fetchHistory;
