import React from 'react';
import TodoStatusIcon from './TodoStatusIcon';
import RemoveIcon from './RemoveIcon';
import EditIcon from './EditIcon';
import TodoText from './TodoText';

const TodoItem = ({ todo }) => (
  <li>
    <TodoStatusIcon todo={todo} />
    <RemoveIcon todo={todo} />
    <EditIcon todo={todo} />
    <TodoText todo={todo} />
  </li>
);

export default TodoItem;
