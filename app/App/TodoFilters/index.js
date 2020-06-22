import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const { TODO, DONE } = useSelector((state) => state.TodoStatus);
  const TodoFiltersEnum = useSelector((state) => state.TodoFilters);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const setStatusFilter = (status, filter) => {
    dispatch({
      type: 'UPDATE_STATUS_FILTER_SET',
      status
    });

    dispatch({
      type: 'SET_SELECTED_STATUS_FILTER',
      filter
    });
  };

  const renderFilterButton = (status, filter, text) => (
    <button
      className={classNames(
        styles['filter-button'],
        styles[`filter-button-${text.toLowerCase()}`],
        selectedFilter === filter && styles['filter-button-selected']
      )}
      onClick={() => setStatusFilter(status, filter)}
    >
      {text}
    </button>
  );

  return (
    <div>
      {renderFilterButton([TODO, DONE], TodoFiltersEnum.ALL, 'All')}
      {renderFilterButton([TODO], TodoFiltersEnum.TODO, 'ToDo')}
      {renderFilterButton([DONE], TodoFiltersEnum.DONE, 'Done')}
    </div>
  );
};

export default TodoFilters;
