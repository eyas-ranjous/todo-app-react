import React from 'react';

import TodoStatus from '../TodoStatus';
import styles from './styles.css';

export default ({ todoFilter, toggleTodoFilter }) => (
  <div className={styles['todo-filters']}>
    <button
      className={styles[`todo${todoFilter.has(TodoStatus.todo) ? '-selected' : ''}`]}
      onClick={() => toggleTodoFilter(TodoStatus.todo)}
    >
      To Do
    </button>

    <button
      className={styles[`done${todoFilter.has(TodoStatus.done) ? '-selected' : ''}`]}
      onClick={() => toggleTodoFilter(TodoStatus.done)}
    >
      Done
    </button>
  </div>
);
