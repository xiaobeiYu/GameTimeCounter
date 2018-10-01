import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom'

import { itemCounter } from './itemDetails';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  itemCounter,
});

const store = createStore(rootReducer)
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)