import { createStore, combineReducers } from 'redux';
import addedTodos from './addedTodos';
import editedTodos from './editedTodos';
import { TodoStatus } from './TodoStatusEnum';
import { TodoFilters } from './TodoFiltersEnum';
import todoFilterSet from './todoFilterSet';
import selectedFilter from './selectedFilter';

export default () => {
  const reducers = combineReducers({
    addedTodos,
    editedTodos,
    TodoStatus,
    TodoFilters,
    todoFilterSet,
    selectedFilter
  });

  return createStore(reducers);
};
