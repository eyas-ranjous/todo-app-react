import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const EditIcon = ({ todo }) => {
  const dispatch = useDispatch();
  const icon = '✎';

  const editTodo = () => {
    dispatch({
      type: 'EDIT_TODO',
      todoId: todo.id
    });
  };

  const classes = classNames(
    styles['todo-item-option'],
    styles['todo-item-edit']
  );

  return (
    <span className={classes} onClick={() => editTodo()}>
      {icon}
    </span>
  );
};

export default EditIcon;
