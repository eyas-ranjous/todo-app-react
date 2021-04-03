import React, { useCallback } from 'react';

import useTodos from './useTodos';
import useTodoFilter from './useTodoFilter';

import TodoInput from './TodoInput';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';

import styles from './styles.css';

export default () => {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();
  const [todoFilter, updateTodoFilter] = useTodoFilter();

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
          todoFilter={todoFilter}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};
