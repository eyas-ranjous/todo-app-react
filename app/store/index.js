import { createStore, combineReducers } from 'redux';
import addedTodos from './addedTodos';
import editedTodos from './editedTodos';
import { TodoStatus } from './todoStatusEnum';
import { TodoFilters } from './todoFiltersEnum';
import todoFilterSet from './todoFilterSet';
import selectedFilter from './selectedFilter';

const reducers = combineReducers({
  addedTodos,
  editedTodos,
  TodoStatus,
  TodoFilters,
  todoFilterSet,
  selectedFilter
});

export default createStore(reducers);
