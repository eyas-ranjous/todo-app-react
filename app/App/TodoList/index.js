import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

const TodoListWith = (TodoItem) => {
  const TodoList = () => {
    const addedTodos = useSelector((state) => state.addedTodos);
    const todoFilterSet = useSelector((state) => state.todoFilterSet);

    const TodoItems = [];
    addedTodos.forEach((todo) => {
      if (todoFilterSet.size === 0 || todoFilterSet.has(todo.status)) {
        TodoItems.push(<TodoItem key={todo.id} todo={todo} />);
      }
    });

    if (TodoItems.length === 0) {
      return (
        <p className={styles['no-todos-msg']}>No Todos Found</p>
      );
    }

    return (
      <ul className={styles['todo-list']}>
        {TodoItems}
      </ul>
    );
  };

  return TodoList;
};

export default TodoListWith;
