import {
  SOCKETS_CONNECTED,
  SOCKETS_DISCONNECTED,
  HISTORY_RECEIVED,
  SOCKETS_MESSAGE_RECEIVED,
  SOCKETS_MESSAGE_SENT,
} from '../types/sockets';

export const socketsConnect = () => ({ type: SOCKETS_CONNECTED });
export const socketsDisconnect = () => ({ type: SOCKETS_DISCONNECTED });
export const socketsHistoryReceive = messages => ({ type: HISTORY_RECEIVED, messages });
export const socketsMessageReceive = message => ({ type: SOCKETS_MESSAGE_RECEIVED, message });
export const socketsMessageSend = message => ({ type: SOCKETS_MESSAGE_SENT, message });
