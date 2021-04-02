import { useState, useEffect } from 'react';

export default ({ todos, todoFilter }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const newFilteredTodos = [];
    todos.forEach((todo) => {
      if (todoFilter.size === 0 || todoFilter.has(todo.status)) {
        newFilteredTodos.push(todo);
      }
    });
    setFilteredTodos(newFilteredTodos);
  }, [todos, todoFilter]);

  return { filteredTodos };
};
