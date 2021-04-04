import React, { useRef } from 'react';

import TodoStatus from '../TodoStatus';

import styles from './styles.css';

export default React.memo(({ addTodo }) => {
  const todoInput = useRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = todoInput.current.value.trim();
      if (!text) return;

      addTodo({ text, status: TodoStatus.todo });
      todoInput.current.value = '';
    }
  };

  return (
    <div className={styles['todo-input']}>
      <input
        type="text"
        className={styles['todo-input']}
        onKeyDown={handleKeyDown}
        placeholder="New Todo..."
        ref={todoInput}
      />
    </div>
  );
});
