import React from 'react';

import Filters from './Filters';
import styles from './styles.css';

export default React.memo(({ todoFilter, updateFilter }) => (
  <div className={styles['todo-filters']}>
    <button
      className={todoFilter === Filters.All ? styles['all-selected'] : styles.all}
      onClick={() => updateFilter(Filters.All)}
    >
      All
    </button>

    <button
      className={todoFilter === Filters.Todo ? styles['todo-selected'] : styles.todo}
      onClick={() => updateFilter(Filters.Todo)}
    >
      To Do
    </button>

    <button
      className={todoFilter === Filters.Done ? styles['done-selected'] : styles.done}
      onClick={() => updateFilter(Filters.Done)}
    >
      Done
    </button>
  </div>
));
