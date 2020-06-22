import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './App/store';
import TodoApp from './App';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
