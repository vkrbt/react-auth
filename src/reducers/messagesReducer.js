import {
  SOCKETS_CONNECTED,
  SOCKETS_DISCONNECTED,
  HISTORY_RECEIVED,
  SOCKETS_MESSAGE_RECEIVED,
  SOCKETS_MESSAGE_SENT,
} from '../types/sockets';

const initialState = {
  connected: false,
  messages: [],
};

const sortMessagesByDate = (a, b) =>  a.time - b.time;

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKETS_CONNECTED:
      return {
        connected: true,
        messages: [],
      };
    case SOCKETS_DISCONNECTED:
      return {
        connected: false,
        messages: [],
      };
    case HISTORY_RECEIVED:
      return {
        ...state,
        messages: action.messages,
      };
    case SOCKETS_MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.message].sort(sortMessagesByDate),
      };
    case SOCKETS_MESSAGE_SENT:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

export default messagesReducer;
