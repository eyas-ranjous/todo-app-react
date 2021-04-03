import React from 'react';

import useTodoCount from './useTodoCount';

import TodoStatus from '../TodoStatus';

import styles from './styles.css';

export default React.memo(({ todos, todoFilter, setTodoFilter }) => {
  const { allCount, todoCount, doneCount } = useTodoCount(todos);

  return (
    <div className={styles['todo-filters']}>
      <button
        className={styles[`all${!todoFilter ? '-selected' : ''}`]}
        onClick={setTodoFilter.bind(null, null)}
      >
        All ({allCount})
      </button>

      <button
        className={styles[`todo${todoFilter === TodoStatus.todo ? '-selected' : ''}`]}
        onClick={setTodoFilter.bind(null, TodoStatus.todo)}
      >
        To Do ({todoCount})
      </button>

      <button
        className={styles[`done${todoFilter === TodoStatus.done ? '-selected' : ''}`]}
        onClick={setTodoFilter.bind(null, TodoStatus.done)}
      >
        Done ({doneCount})
      </button>
    </div>
  );
});
