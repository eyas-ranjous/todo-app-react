const editedTodos = (state = new Set(), action) => {
  if (action.type === 'EDIT_TODO') {
    return new Set(state).add(action.todoId);
  }

  if (action.type === 'REMOVE_EDITED_TODO') {
    const newState = new Set(state);
    newState.delete(action.todoId);
    return newState;
  }

  return state;
};

export default editedTodos;
