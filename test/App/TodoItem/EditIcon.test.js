import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import EditIcon from '../../../app/App/TodoItem/EditIcon';

describe('EditIcon', () => {
  const store = createStore();
  const todo = {
    id: 'todo-1',
    text: 'test task',
    status: TodoStatusEnum.TODO
  };

  it('renders successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
        <EditIcon todo={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('add todo to edited todos on click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <EditIcon todo={todo} />
      </Provider>
    );
    wrapper.find('.todo-item-edit').simulate('click');
    expect(Array.from(store.getState().editedTodos)).toEqual(['todo-1']);
  });
});
