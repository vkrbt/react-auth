import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Chat from './containers/Chat';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import store from './store';

const redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().loginReducer.token) {
    replace({
      pathname: '/',
    });
  }
};

const redirectIfNotLoggedIn = (nextState, replace) => {
  if (!store.getState().loginReducer.token) {
    replace({
      pathname: '/login',
    });
  }
};

const Routing = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Chat} onEnter={redirectIfNotLoggedIn} />
      <Route path="/login" component={Login} onEnter={redirectIfLoggedIn} />
      <Route path="/register" component={Register} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);

export default Routing;
