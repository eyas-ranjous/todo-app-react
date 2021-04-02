import { useState } from 'react';

export default () => {
  const [todoFilter, setTodoFilter] = useState();

  return { todoFilter, setTodoFilter };
};
