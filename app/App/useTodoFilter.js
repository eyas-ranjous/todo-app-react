import { useState } from 'react';

import Filters from './TodoFilters/Filters';

export default () => {
  const [todoFilter, updateTodoFilter] = useState(Filters.All);

  return { todoFilter, updateTodoFilter };
};
