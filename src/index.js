import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import reducer from './store/reducer';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));