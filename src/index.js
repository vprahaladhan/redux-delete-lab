import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './App';
import manageBand from './reducers/manageBand';

const store = createStore(
  manageBand,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);