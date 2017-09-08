const storage = {
  getToken: () => sessionStorage.getItem('token'),
  setToken: token => sessionStorage.setItem('token', token),
  removeToken: () => sessionStorage.removeItem('token'),
};

export default storage;
