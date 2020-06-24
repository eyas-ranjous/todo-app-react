import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import TodoApp from './App';

ReactDOM.render(
  <Provider store={createStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
