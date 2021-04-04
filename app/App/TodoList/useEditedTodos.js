import { useState } from 'react';

export default (updateTodo) => {
  const [editedTodos, setEditedTodos] = useState(new Set());

  const editTodo = (id) => {
    setEditedTodos(new Set(editedTodos).add(id));
  };

  const unEditTodo = (id) => {
    const newEditedTodos = new Set(editedTodos);
    newEditedTodos.delete(id);
    setEditedTodos(newEditedTodos);
  };

  const saveEditedTodo = (todo) => {
    unEditTodo(todo.id);
    updateTodo(todo);
  };

  return { editedTodos, editTodo, unEditTodo, saveEditedTodo };
};
