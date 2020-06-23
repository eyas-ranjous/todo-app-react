import addedTodos from '../../app/store/addedTodos';
import { TodoStatusEnum } from '../../app/store/todoStatusEnum';

describe('addedTodos', () => {
  let state;

  it('adds a todo', () => {
    state = addedTodos(new Map(), {
      type: 'ADD_TODO',
      todo: { text: 'test todo..' }
    });
    expect(Array.from(state)).toEqual([
      ['todo-1', {
        id: 'todo-1',
        text: 'test todo..',
        status: TodoStatusEnum.TODO 
      }]
    ]);
  });

  it('updates a todo', () => {
    state = addedTodos(state, {
      type: 'UPDATE_TODO',
      todo: {
        id: 'todo-1',
        text: 'updated test todo..'
      }
    });
    expect(Array.from(state)).toEqual([
      ['todo-1', {
        id: 'todo-1',
        text: 'updated test todo..',
        status: TodoStatusEnum.TODO 
      }]
    ]);
  });

  it('toggles a todo status', () => {
    state = addedTodos(state, {
      type: 'TOGGLE_TODO_STATUS',
      todoId: 'todo-1'
    });
    expect(Array.from(state)).toEqual([
      ['todo-1', {
        id: 'todo-1',
        text: 'updated test todo..',
        status: TodoStatusEnum.DONE 
      }]
    ]);
  });

  it('removes a todo', () => {
    state = addedTodos(state, {
      type: 'REMOVE_TODO',
      todoId: 'todo-1'
    });
    expect(Array.from(state)).toEqual([]);
  });
});
