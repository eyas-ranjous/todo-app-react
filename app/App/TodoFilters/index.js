import React from 'react';
import { useDispatch } from 'react-redux';
import AllFilterButton from './AllFilterButton';
import TodoFilterButton from './TodoFilterButton';
import DoneFilterButton from './DoneFilterButton';

const TodoFilters = () => {
  const dispatch = useDispatch();

  const setFilter = (statusList, filter) => {
    dispatch({
      type: 'UPDATE_STATUS_FILTER_SET',
      statusList
    });

    dispatch({
      type: 'SET_SELECTED_STATUS_FILTER',
      filter
    });
  };

  return (
    <div>
      <AllFilterButton setFilter={setFilter} />
      <TodoFilterButton setFilter={setFilter} />
      <DoneFilterButton setFilter={setFilter} />
    </div>
  );
};

export default TodoFilters;
