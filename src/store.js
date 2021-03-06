import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/rootReducer';

/* eslint-disable no-underscore-dangle no-max-length */
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
/* eslint-enable */

const store = createStore(reducers, {},
  compose(applyMiddleware(thunk), enhancers));

export default store;
