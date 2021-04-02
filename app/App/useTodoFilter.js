import { useState } from 'react';

export default () => {
  const [todoFilter, setTodoFilter] = useState(new Set());

  const toggleTodoFilter = (todoStatus) => {
    const newTodoFilter = new Set(todoFilter);
    if (newTodoFilter.has(todoStatus)) {
      newTodoFilter.delete(todoStatus);
    } else {
      newTodoFilter.add(todoStatus);
    }
    setTodoFilter(newTodoFilter);
  };

  return { todoFilter, toggleTodoFilter };
};
