import React, { useState, useCallback } from 'react';
import styles from './styles.css';
import TodoFilters from './TodoFilters';
import Filters from './TodoFilters/Filters';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default () => {
  const [todos, setTodos] = useState(new Map());
  const [todoFilter, setTodoFilter] = useState(Filters.All);

  const saveTodo = useCallback((todo) => {
    const id = todo.id || (todos.size + 1);
    setTodos(new Map(todos).set(id, { ...todo, id }));
  }, [todos]);

  const removeTodo = useCallback((todo) => {
    const newTodos = new Map(todos);
    newTodos.delete(todo.id);
    setTodos(newTodos);
  }, [todos]);

  const updateFilter = useCallback(setTodoFilter, [todoFilter]);

  return (
    <div className={styles['todo-app']}>
      <h1>A Todo App in React w/ Hooks</h1>
      <div className={styles.todos}>
        <TodoInput saveTodo={saveTodo} />
        <TodoFilters
          todoFilter={todoFilter}
          updateFilter={updateFilter}
        />
        <TodoList
          todos={todos}
          todoFilter={todoFilter}
          saveTodo={saveTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};
