import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoText = ({ todo }) => {
  const dispatch = useDispatch();
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const editedTodos = useSelector((state) => state.editedTodos);
  let todoInput;

  const removeEditedTodo = () => {
    dispatch({
      type: 'REMOVE_EDITED_TODO',
      todoId: todo.id
    });
  };

  const updateTodo = () => {
    if (todoInput.value) {
      todoInput.classList.remove(styles.required);
      dispatch({
        type: 'UPDATE_TODO',
        todo: {
          id: todo.id,
          text: todoInput.value
        }
      });
    }
  };

  if (!editedTodos.has(todo.id)) {
    return (
      <span
        className={todo.status === TodoStatus.DONE
          ? styles['todo-item-striked']
          : ''
        }
      >
        {todo.text}
      </span>
    );
  }

  const handleEditKeyDown = (e) => {
    if (e.keyCode === 13) {
      updateTodo();
      removeEditedTodo();
    }
  };

  return (
    <input
      className={styles['todo-item-edit-input']}
      type="text"
      onKeyDown={handleEditKeyDown}
      defaultValue={todo.text}
      ref={(el) => { todoInput = el; }}
    />
  );
};

export default TodoText;
