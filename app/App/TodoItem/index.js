import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const editedTodos = useSelector((state) => state.editedTodos);
  let todoInput;

  const editTodo = () => {
    dispatch({
      type: 'EDIT_TODO',
      todoId: todo.id
    });
  };

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

  const toggleTodoStatus = () => {
    dispatch({
      type: 'TOGGLE_TODO_STATUS',
      todoId: todo.id
    });
  };

  const removeTodo = () => {
    dispatch({
      type: 'REMOVE_TODO',
      todoId: todo.id
    });
  };

  const renderTodoStatus = () => {
    const symbol = todo.status === TodoStatus.DONE ? '✅' : '⬜';

    return (
      <span
        className={styles['todo-item-option']}
        onClick={toggleTodoStatus}
      >
        {symbol}
      </span>
    );
  };

  const renderTodoText = () => {
    if (!editedTodos.has(todo.id)) {
      const { status } = todo;
      if (status === TodoStatus.TODO) {
        return (<span>{todo.text}</span>);
      }
      return (
        <span className={styles['todo-item-striked']}>
          {todo.text}
        </span>
      );
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        updateTodo();
        removeEditedTodo();
      }
    };

    return (
      <input
        className={styles['todo-item-edit-input']}
        type="text"
        onKeyDown={handleKeyDown}
        defaultValue={todo.text}
        ref={(el) => { todoInput = el; }}
      />
    );
  };

  return (
    <li>
      {renderTodoStatus()}
      <span
        className={classNames(
          styles['todo-item-option'],
          styles['todo-item-remove'],
        )}
        onClick={removeTodo}
      >
        ✘
      </span>
      <span
        className={classNames(
          styles['todo-item-option'],
          styles['todo-item-edit'],
        )}
        onClick={() => editTodo()}
      >
        ✎
      </span>
      {renderTodoText()}
    </li>
  );
};

export default TodoItem;
