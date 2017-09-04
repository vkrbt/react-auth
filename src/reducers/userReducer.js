import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from '../types/user';

const loginReducer = (user = {}, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case USER_SUCCESS:
      return { success: true, ...action.user };
    case USER_ERROR:
      return { success: false };
    default:
      return user;
  }
};

export default loginReducer;
