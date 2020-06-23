import editedTodos from '../../app/store/editedTodos';

describe('editedTodos', () => {
  let state;

  it('add a todo to edited set', () => {
    state = editedTodos(new Set(), {
      type: 'EDIT_TODO',
      todoId: 'todo-1'
    });
    expect(Array.from(state)).toEqual(['todo-1']);
  });

  it('removes a todo from edited set', () => {
    state = editedTodos(state, {
      type: 'REMOVE_EDITED_TODO',
      todoId: 'todo-1'
    });
    expect(Array.from(state)).toEqual([]);
  });
});
