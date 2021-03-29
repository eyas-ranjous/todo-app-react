import React, { useRef } from 'react';

import TodoStatus from './TodoStatus';
import styles from './styles.css';

export default ({
  todo,
  editTodo,
  toggleTodoStatus,
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
        {todo.status === TodoStatus.Done ? '✅' : '⬜'}
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
        <span className={todo.status === TodoStatus.Done
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
