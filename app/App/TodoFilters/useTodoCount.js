import { useState, useEffect } from 'react';

import TodoStatus from '../TodoStatus';

export default (todos) => {
  const [allCount, setAllCount] = useState(todos.size);
  const [todoCount, setTodoCount] = useState(todos.size);
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    setAllCount(todos.size);
    const todoList = Array.from(todos).filter(
      ([, todo]) => todo.status === TodoStatus.todo
    );
    const doneList = Array.from(todos).filter(
      ([, todo]) => todo.status === TodoStatus.done
    );
    setTodoCount(todoList.length);
    setDoneCount(doneList.length);
  }, [todos]);

  return { allCount, todoCount, doneCount };
};
