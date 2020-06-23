import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const RemoveIcon = ({ todo }) => {
  const dispatch = useDispatch();
  const icon = '✘';

  const removeTodo = () => {
    dispatch({
      type: 'REMOVE_TODO',
      todoId: todo.id
    });
  };

  const classes = classNames(
    styles['todo-item-option'],
    styles['todo-item-remove']
  );

  return (
    <span className={classes} onClick={removeTodo}>
      {icon}
    </span>
  );
};

export default RemoveIcon;
