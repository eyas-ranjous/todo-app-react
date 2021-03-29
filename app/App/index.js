import React, { useState } from 'react';
import styles from './styles.css';
import { TodoFilters, Filters } from './TodoFilters';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default () => {
  const [todos, setTodos] = useState(new Map());
  const [todoFilter, setTodoFilter] = useState(Filters.All);

  const saveTodo = (todo) => {
    const id = todo.id || (todos.size + 1);
    setTodos(new Map(todos).set(id, { ...todo, id }));
  };

  const removeTodo = (todo) => {
    const newTodos = new Map(todos);
    newTodos.delete(todo.id);
    setTodos(newTodos);
  };

  return (
    <div className={styles['todo-app']}>
      <h1>A Todo App in React w/ Hooks</h1>
      <div className={styles.todos}>
        <TodoInput saveTodo={saveTodo} />
        <TodoFilters
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
        />
        <TodoList
          todos={todos}
          todoFilter={todoFilter}
          saveTodo={saveTodo}
          removeTodo={removeTodo}
          Filters={Filters}
        />
      </div>
    </div>
  );
};
