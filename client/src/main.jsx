// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Redux + Middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// 
import App from './app/App.jsx';
import Signin from './app/signin/Signin.jsx';
import RestaurantsList from './app/restaurants/RestaurantsList.jsx';
import rootReducer from './rootReducer.js';

const Routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Signin } />
    <Route path="/restaurants" component={ RestaurantsList } />
  </Route>
);

const createStoreWithMiddleWare = applyMiddleware(promise, thunk, logger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(rootReducer)} >
    <Router history={browserHistory} routes={Routes} />
  </Provider>
, document.getElementById('app'));