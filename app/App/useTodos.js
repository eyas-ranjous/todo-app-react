import React, { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState(new Map());

  const addTodo = (todo) => {
    const id = todos.size + 1;
    setTodos(new Map(todos).set(id, { ...todo, id }));
  };

  const updateTodo = (todo) => {
    setTodos(new Map(todos).set(todo.id, { ...todo }));
  };

  const removeTodo = (todo) => {
    const newTodos = new Map(todos);
    newTodos.delete(todo.id);
    setTodos(newTodos);
  };

  return { todos, addTodo, updateTodo, removeTodo };
};
