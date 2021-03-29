import React from 'react';

import styles from './styles.css';

export const Filters = {
  All: 0,
  Todo: 1,
  Done: 2
};

export const TodoFilters = ({ todoFilter, setTodoFilter }) => (
  <div className={styles['todo-filters']}>
    <button
      className={todoFilter === Filters.All ? styles['all-selected'] : styles.all}
      onClick={() => setTodoFilter(Filters.All)}
    >
      All
    </button>

    <button
      className={todoFilter === Filters.Todo ? styles['todo-selected'] : styles.todo}
      onClick={() => setTodoFilter(Filters.Todo)}
    >
      To Do
    </button>

    <button
      className={todoFilter === Filters.Done ? styles['done-selected'] : styles.done}
      onClick={() => setTodoFilter(Filters.Done)}
    >
      Done
    </button>
  </div>
);
