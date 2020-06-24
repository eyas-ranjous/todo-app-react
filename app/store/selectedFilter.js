import { TodoFiltersEnum } from './TodoFiltersEnum';

const selectedFilter = (state = TodoFiltersEnum.ALL, action) => {
  if (action.type === 'SET_SELECTED_STATUS_FILTER') {
    return action.filter;
  }

  return state;
};

export default selectedFilter;
