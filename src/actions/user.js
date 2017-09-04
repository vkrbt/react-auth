import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from '../types/user';
import fetchUser from '../api/user';


const getUser = () => async (dispatch) => {
  dispatch({ type: USER_REQUEST });
  try {
    const res = await fetchUser();
    if (res.ok) {
      const user = await res.json();
      dispatch({ type: USER_SUCCESS, user });
    } else {
      dispatch({ type: USER_ERROR, error: res.status });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: USER_ERROR, error });
  }
};

export default getUser;
