import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  loginReducer,
  userReducer,
});

export default reducers;
