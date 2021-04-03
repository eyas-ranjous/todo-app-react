import React from 'react';

import TodoStatus from '../TodoStatus';

import styles from './styles.css';

export default React.memo(({ todoFilter, updateTodoFilter }) => (
  <div className={styles['todo-filters']}>
    <button
      className={styles[`all${!todoFilter ? '-selected' : ''}`]}
      onClick={updateTodoFilter.bind(null, null)}
    >
      All
    </button>

    <button
      className={styles[`todo${todoFilter === TodoStatus.todo ? '-selected' : ''}`]}
      onClick={updateTodoFilter.bind(null, TodoStatus.todo)}
    >
      To Do
    </button>

    <button
      className={styles[`done${todoFilter === TodoStatus.done ? '-selected' : ''}`]}
      onClick={updateTodoFilter.bind(null, TodoStatus.done)}
    >
      Done
    </button>
  </div>
));
