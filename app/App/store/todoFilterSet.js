const todoFilterSet = (state = new Set(), action) => {
  if (action.type === 'UPDATE_STATUS_FILTER_SET') {
    return new Set(action.status);
  }

  return state;
};

export default todoFilterSet;
