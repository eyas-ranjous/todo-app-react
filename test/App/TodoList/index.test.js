import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import createStore from '../../../app/store';
import TodoItem from '../../../app/App/TodoItem';
import TodoListWith from '../../../app/App/TodoList';

describe('TodoList', () => {
  const store = createStore();
  const TodoList = TodoListWith(TodoItem);

  it('renders successfully', () => {
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task 1' } });
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task 2' } });
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task 3' } });
    const wrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
