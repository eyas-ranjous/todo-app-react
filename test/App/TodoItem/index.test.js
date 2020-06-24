import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import createStore from '../../../app/store';
import TodoItem from '../../../app/App/TodoItem';

describe('TodoItem', () => {
  const store = createStore();

  it('renders successfully', () => {
    const todo = {
      id: 'todo-1',
      text: 'test task',
      status: TodoStatusEnum.TODO
    };
    const wrapper = mount(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
