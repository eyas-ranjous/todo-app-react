import React, { useState, useCallback } from 'react';
import styles from './styles.css';
import useTodos from './useTodos';
import useTodoFilter from './useTodoFilter';
import TodoFilters from './TodoFilters';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default () => {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();
  const { todoFilter, updateTodoFilter } = useTodoFilter();

  return (
    <div className={styles['todo-app']}>
      <h1>A Todo App in React & Hooks</h1>
      <div className={styles.todos}>
        <TodoInput addTodo={addTodo} />
        <TodoFilters
          todoFilter={todoFilter}
          updateTodoFilter={updateTodoFilter}
        />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          todoFilter={todoFilter}
        />
      </div>
    </div>
  );
};
