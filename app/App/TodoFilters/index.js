import React from 'react';

import TodoStatus from '../TodoStatus';
import styles from './styles.css';

export default ({ todoFilter, setTodoFilter }) => (
  <div className={styles['todo-filters']}>
    <button
      className={styles[`all${!todoFilter ? '-selected' : ''}`]}
      onClick={setTodoFilter.bind(null, null)}
    >
      All
    </button>
    <button
      className={styles[`todo${todoFilter === TodoStatus.todo ? '-selected' : ''}`]}
      onClick={setTodoFilter.bind(null, TodoStatus.todo)}
    >
      To Do
    </button>

    <button
      className={styles[`done${todoFilter === TodoStatus.done ? '-selected' : ''}`]}
      onClick={setTodoFilter.bind(null, TodoStatus.done)}
    >
      Done
    </button>
  </div>
);
