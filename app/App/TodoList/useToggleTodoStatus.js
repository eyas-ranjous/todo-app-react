import TodoStatus from '../TodoStatus';

export default (updateTodo) => {
  const toggleTodoStatus = (todo) => {
    const newStatus = todo.status === TodoStatus.todo
      ? TodoStatus.done
      : TodoStatus.todo;

    updateTodo({ ...todo, ...{ status: newStatus } });
  };

  return { toggleTodoStatus };
};
