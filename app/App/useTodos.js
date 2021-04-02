import { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState(new Map());

  const addTodo = (todo) => {
    const newTodos = new Map(todos);
    const id = newTodos.size + 1;
    setTodos(newTodos.set(id, { ...todo, id }));
  };

  const updateTodo = (todo) => {
    const newTodos = new Map(todos);
    setTodos(newTodos.set(todo.id, { ...todo }));
  };

  const removeTodo = (todo) => {
    const newTodos = new Map(todos);
    newTodos.delete(todo.id);
    setTodos(newTodos);
  };

  return { todos, addTodo, updateTodo, removeTodo };
};
