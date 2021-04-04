import React, { useRef } from 'react';
import classnames from 'classnames';

import TodoStatus from '../TodoStatus';

import styles from './styles.css';

export default ({
  todo,
  toggleTodoStatus,
  editTodo,
  unEditTodo,
  saveEditedTodo,
  removeTodo,
  isEditing
}) => {
  const todoInput = useRef();

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = todoInput.current.value.trim();
      if (!text) {
        unEditTodo(todo.id);
        return;
      }
      saveEditedTodo({ ...todo, ...{ text } });
    }
  };

  return (
    <li>
      <span
        title="change"
        className={styles.icon}
        onClick={() => toggleTodoStatus(todo)}
      >
        {todo.status === TodoStatus.done ? '✅' : '⬜'}
      </span>

      <span title="remove"
        className={classnames(styles.icon, styles['remove-icon'])}
        onClick={() => removeTodo(todo)}
      >
        ✘
      </span>

      <span
        title="edit"
        className={classnames(styles.icon, styles['edit-icon'])}
        onClick={() => editTodo(todo.id)}
      >
        ✎
      </span>

      {!isEditing && (
        <span className={todo.status === TodoStatus.done
          ? classnames(styles.text, styles.done)
          : styles.text
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
