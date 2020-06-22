import React from 'react';
import TodoInput from './TodoInput';
import TodoListWith from './TodoList';
import TodoItem from './TodoItem';
import TodoFilters from './TodoFilters';
import styles from './styles.css';

const TodoList = TodoListWith(TodoItem);

export default () => (
  <div className={styles['todo-app']}>
    <h1>React/Redux/Hooks Todo App</h1>
    <TodoInput />
    <TodoList />
    <TodoFilters />
  </div>
);
