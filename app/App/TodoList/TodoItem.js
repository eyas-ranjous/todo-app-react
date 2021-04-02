import React, { useRef } from 'react';

import styles from './styles.css';

import TodoStatus from '../TodoStatus';

export default ({
  todo,
  toggleTodoStatus,
  editTodo,
  saveEditedTodo,
  removeTodo,
  isEditing
}) => {
  const todoInput = useRef();

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      saveEditedTodo({ ...todo, ...{ text: todoInput.current.value } });
    }
  };

  return (
    <li>
      <span
        title="change"
        className={styles['status-icon']}
        onClick={() => toggleTodoStatus(todo)}
      >
        {todo.status === TodoStatus.done ? '✅' : '⬜'}
      </span>

      <span title="remove"
        className={styles['remove-icon']}
        onClick={() => removeTodo(todo)}
      >
        ✘
      </span>

      <span
        title="edit"
        className={styles['edit-icon']}
        onClick={() => editTodo(todo.id)}
      >
        ✎
      </span>

      {!isEditing && (
        <span className={todo.status === TodoStatus.done
          ? styles.done
          : styles.todo
        }>
          {todo.text}
        </span>
      )}

      {isEditing && (
        <input
          type="text"
          onKeyDown={handleEditKeyDown}
          defaultValue={todo.text}
          ref={todoInput}
        />
      )}
    </li>
  );
};
