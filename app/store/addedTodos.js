import { TodoStatusEnum } from './todoStatusEnum';

let nextTodoId = 1;

const addedTodos = (state = new Map(), action) => {
  if (action.type === 'ADD_TODO') {
    const { todo } = action;
    const id = `todo-${nextTodoId}`;
    const status = TodoStatusEnum.TODO;
    nextTodoId += 1;
    return new Map(state).set(id, { ...todo, ...{ id, status } });
  }

  if (action.type === 'UPDATE_TODO') {
    const { todo } = action;

    if (!state.has(todo.id)) return state;

    const updatedTodo = { ...state.get(todo.id), ...todo };
    return new Map(state).set(todo.id, updatedTodo);
  }

  if (action.type === 'REMOVE_TODO') {
    const newState = new Map(state);
    newState.delete(action.todoId);
    return newState;
  }

  if (action.type === 'TOGGLE_TODO_STATUS') {
    if (!state.has(action.todoId)) return state;

    const todo = state.get(action.todoId);
    const { DONE, TODO } = TodoStatusEnum;
    const newStatus = todo.status === TODO ? DONE : TODO;
    const updatedTodo = { ...todo, ...{ status: newStatus } };

    return new Map(state).set(todo.id, updatedTodo);
  }

  return state;
};

export default addedTodos;
