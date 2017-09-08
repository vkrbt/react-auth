import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../types/login';
import storage from '../storage';

const defaultToken = { token: storage.getToken() };

const loginReducer = (state = defaultToken, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { success: true, token: action.token };
    case LOGIN_ERROR:
      return { success: false, error: action.error };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default loginReducer;
