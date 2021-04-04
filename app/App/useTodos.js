import { useState } from 'react';

import TodoStatus from './TodoStatus';

export default () => {
  const [todos, setTodos] = useState(new Map());
  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const addTodo = (todo) => {
    const newTodos = new Map(todos);
    const id = newTodos.size + 1;
    setTodos(newTodos.set(id, { ...todo, id }));
    setTodoCount(todoCount + 1);
  };

  const updateTodo = (todo) => {
    if (todo.status !== todos.get(todo.id).status) {
      if (todo.status === TodoStatus.todo) {
        setTodoCount(todoCount + 1);
        setDoneCount(doneCount - 1);
      } else if (todo.status === TodoStatus.done) {
        setTodoCount(todoCount - 1);
        setDoneCount(doneCount + 1);
      }
    }

    const newTodos = new Map(todos);
    setTodos(newTodos.set(todo.id, { ...todo }));
  };

  const removeTodo = (todo) => {
    const newTodos = new Map(todos);
    newTodos.delete(todo.id);
    setTodos(newTodos);
    if (todo.status === TodoStatus.todo) {
      setTodoCount(todoCount - 1);
    } else if (todo.status === TodoStatus.done) {
      setDoneCount(doneCount - 1);
    }
  };

  return {
    todos,
    todoCount,
    doneCount,
    addTodo,
    updateTodo,
    removeTodo
  };
};
