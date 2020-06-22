const todoStatusFilter = (state = new Set(), action) => {
  if (action.type === 'SET_TODO_STATUS_FILTER') {
    return new Set(action.status);
  }

  return state;
};

export default todoStatusFilter;
