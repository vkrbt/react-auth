import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import messagesReducer from './messagesReducer';

const reducers = combineReducers({
  loginReducer,
  userReducer,
  messagesReducer,
});

export default reducers;
