import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const { TODO, DONE } = useSelector((state) => state.TodoStatus);

  const setStatusFilter = (status) => {
    dispatch({
      type: 'SET_TODO_STATUS_FILTER',
      status
    });
  };

  return (
    <div>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-all']
        )}
        onClick={() => setStatusFilter([TODO, DONE])}
      >
        All
      </button>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-todo']
        )}
        onClick={() => setStatusFilter([TODO])}
      >
        Todo
      </button>
      <button
        className={classNames(
          styles['filter-button'],
          styles['filter-button-done']
        )}
        onClick={() => setStatusFilter([DONE])}
      >
        Done
      </button>
    </div>
  );
};

export default TodoFilters;
