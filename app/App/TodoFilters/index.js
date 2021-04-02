import React from 'react';

import Filters from './Filters';
import styles from './styles.css';

export default ({ todoFilter, updateTodoFilter }) => {
  console.log('rendered TodoFilters');
  return (
    <div className={styles['todo-filters']}>
      <button
        className={todoFilter === Filters.All ? styles['all-selected'] : styles.all}
        onClick={() => updateTodoFilter(Filters.All)}
      >
        All
      </button>

      <button
        className={todoFilter === Filters.Todo ? styles['todo-selected'] : styles.todo}
        onClick={() => updateTodoFilter(Filters.Todo)}
      >
        To Do
      </button>

      <button
        className={todoFilter === Filters.Done ? styles['done-selected'] : styles.done}
        onClick={() => updateTodoFilter(Filters.Done)}
      >
        Done
      </button>
    </div>
  );
};
