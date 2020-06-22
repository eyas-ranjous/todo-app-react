import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const DoneFilterButton = ({ setFilter }) => {
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const TodoFilters = useSelector((state) => state.TodoFilters);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const filter = TodoFilters.DONE;
  const statusList = [TodoStatus.DONE];

  const classes = classNames(
    styles['filter-button'],
    styles['filter-button-done'],
    selectedFilter === filter ? styles['filter-button-selected'] : ''
  );

  return (
    <button
      className={classes}
      onClick={() => setFilter(statusList, filter)}
    >
      Done
    </button>
  );
};

export default DoneFilterButton;
