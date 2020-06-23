import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoFilterButton = ({ setFilter }) => {
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const TodoFilters = useSelector((state) => state.TodoFilters);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const filter = TodoFilters.TODO;
  const statusList = [TodoStatus.TODO];

  const classes = classNames(
    styles['filter-button'],
    styles['filter-button-todo'],
    selectedFilter === filter ? styles['filter-button-selected'] : ''
  );

  return (
    <button className={classes} onClick={() => setFilter(statusList, filter)}>
      To Do
    </button>
  );
};

export default TodoFilterButton;
