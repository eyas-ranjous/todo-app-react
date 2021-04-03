import { useState, useCallback } from 'react';

export default () => {
  const [todoFilter, setTodoFilter] = useState();

  return [todoFilter, setTodoFilter];
};
