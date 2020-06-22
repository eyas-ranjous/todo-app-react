import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

const TodoListWith = (TodoItem) => {
  const TodoList = () => {
    const addedTodos = useSelector((state) => state.addedTodos);
    const todoStatusFilter = useSelector((state) => state.todoStatusFilter);

    if (addedTodos.size === 0) {
      return (
        <p className={styles['no-todos-msg']}>No Todos Found</p>
      );
    }

    const buildTodoItems = () => {
      const TodoItems = [];
      addedTodos.forEach((todo) => {
        if (todoStatusFilter.size === 0 || todoStatusFilter.has(todo.status)) {
          TodoItems.push(<TodoItem key={todo.id} todo={todo} />);
        }
      });
      return TodoItems;
    };

    return (
      <ul className={styles['todo-list']}>
        {buildTodoItems()}
      </ul>
    );
  };

  return TodoList;
};

export default TodoListWith;
