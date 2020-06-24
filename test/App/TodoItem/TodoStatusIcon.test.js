import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import TodoStatusIcon from '../../../app/App/TodoItem/TodoStatusIcon';

describe('TodoStatusIcon', () => {
  const store = createStore();
  
  it('renders successfully', () => {
    const todo1 = {
      id: 'todo-1',
      text: 'test task',
      status: TodoStatusEnum.TODO
    };
    const wrapper1 = mount(
      <Provider store={store}>
        <TodoStatusIcon todo={todo1} />
      </Provider>
    );
    expect(wrapper1).toMatchSnapshot();

    const todo2 = {
      id: 'todo-1',
      text: 'test task',
      status: TodoStatusEnum.DONE
    };
    const wrapper2 = mount(
      <Provider store={store}>
        <TodoStatusIcon todo={todo2} />
      </Provider>
    );

    expect(wrapper2).toMatchSnapshot();
  });

  it('change todo status when clicked', () => {
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task' } });
    const todo = store.getState().addedTodos.get('todo-1');
    const wrapper = mount(
      <Provider store={store}>
        <TodoStatusIcon todo={todo} />
      </Provider>
    );
    expect(store.getState().addedTodos.get('todo-1')).toEqual({
      id: 'todo-1',
      text: 'test task',
      status: TodoStatusEnum.TODO
    });
    wrapper.find('.todo-item-option').simulate('click');
    expect(store.getState().addedTodos.get('todo-1')).toEqual({
      id: 'todo-1',
      text: 'test task',
      status: TodoStatusEnum.DONE
    });
  });
});
