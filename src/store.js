import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import reducers from './reducers/rootReducer';
import socket from './sockets/index';

const sockketMiddleware = createSocketIoMiddleware(socket);

/* eslint-disable no-underscore-dangle no-max-length */
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
/* eslint-enable */

const store = createStore(reducers, {},
  compose(applyMiddleware(thunk, sockketMiddleware), enhancers));

export default store;
