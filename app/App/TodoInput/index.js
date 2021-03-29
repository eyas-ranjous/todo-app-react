import React, { useRef } from 'react';

import TodoStatus from '../TodoList/TodoStatus';
import styles from './styles.css';

export default ({ saveTodo }) => {
  const todoInput = useRef();

  const addTodo = () => {
    const { value: text } = todoInput.current;
    if (!text) {
      return;
    }
    saveTodo({ text, status: TodoStatus.Todo });
    todoInput.current.value = '';
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo();
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
