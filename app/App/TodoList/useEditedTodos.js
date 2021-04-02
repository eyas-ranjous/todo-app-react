import { useState, useEffect } from 'react';

export default (updateTodo) => {
  const [editedTodos, setEditedTodos] = useState(new Set());

  const editTodo = (id) => {
    setEditedTodos(new Set(editedTodos).add(id));
  };

  const saveEditedTodo = (todo) => {
    const newEditedTodos = new Set(editedTodos);
    newEditedTodos.delete(todo.id);
    setEditedTodos(newEditedTodos);
    updateTodo(todo);
  };

  return { editedTodos, editTodo, saveEditedTodo };
};
