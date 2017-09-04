import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './store';
import './assets/styles.css';

ReactDOM.render(
  <Provider store={store}>
    {Routing}
  </Provider>,
  document.getElementById('root'),
);
