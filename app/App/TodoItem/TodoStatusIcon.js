import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const TodoStatusIcon = ({ todo }) => {
  const dispatch = useDispatch();
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const todoIcon = '⬜';
  const doneIcon = '✅';

  const toggleTodoStatus = () => {
    dispatch({ type: 'TOGGLE_TODO_STATUS', todoId: todo.id });
  };

  const statusIcon = todo.status === TodoStatus.DONE ? doneIcon : todoIcon;

  return (
    <span className={styles['todo-item-option']} onClick={toggleTodoStatus}>
      {statusIcon}
    </span>
  );
};

export default TodoStatusIcon;
