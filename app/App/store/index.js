import { createStore, combineReducers } from 'redux';
import addedTodos from './addedTodos';
import editedTodos from './editedTodos';
import { TodoStatus } from './todoStatus';
import todoStatusFilter from './todoStatusFilter';

const reducers = combineReducers({
  addedTodos,
  editedTodos,
  TodoStatus,
  todoStatusFilter
});

export default createStore(reducers);
