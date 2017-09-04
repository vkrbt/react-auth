import { browserHistory } from 'react-router';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../types/login';
import fetchLogin from '../api/login';
import getUser from '../actions/user';

const login = (name, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await fetchLogin(name, password);
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', `JWT ${data.token}`);
      dispatch({ type: LOGIN_SUCCESS, token: localStorage.getItem('token') });
      dispatch(getUser());
      browserHistory.push('/');
    } else {
      dispatch({ type: LOGIN_ERROR, error: res.status });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_ERROR, error });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
  browserHistory.push('/login');
};

export { logout, login };

