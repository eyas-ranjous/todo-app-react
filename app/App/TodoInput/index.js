import React, { useRef } from 'react';

import TodoStatus from '../TodoList/TodoStatus';
import styles from './styles.css';

export default ({ addTodo }) => {
  const todoInput = useRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { value: text } = todoInput.current;
      if (!text) return;
      addTodo({ text, status: TodoStatus.Todo });
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
};
