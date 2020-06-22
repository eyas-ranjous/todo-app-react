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

  return (
    <div>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-all'],
          selectedFilter === TodoFiltersEnum.ALL
            && styles['filter-button-selected']
        )}
        onClick={() => setStatusFilter([TODO, DONE], TodoFiltersEnum.ALL)}
      >
        All
      </button>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-todo'],
          selectedFilter === TodoFiltersEnum.TODO
            && styles['filter-button-selected']
        )}
        onClick={() => setStatusFilter([TODO], TodoFiltersEnum.TODO)}
      >
        Todo
      </button>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-done'],
          selectedFilter === TodoFiltersEnum.DONE
            && styles['filter-button-selected']
        )}
        onClick={() => setStatusFilter([DONE], TodoFiltersEnum.DONE)}
      >
        Done
      </button>
    </div>
  );
};

export default TodoFilters;
