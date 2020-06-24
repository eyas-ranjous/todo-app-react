import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import RemoveIcon from '../../../app/App/TodoItem/RemoveIcon';

describe('RemoveIcon', () => {
  const store = createStore();
  const todo = {
    id: 'todo-1',
    text: 'test task',
    status: TodoStatusEnum.TODO
  };

  it('renders successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RemoveIcon todo={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('remove todo when icon clicked', () => {
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task' } });

    const wrapper = mount(
      <Provider store={store}>
        <RemoveIcon todo={todo} />
      </Provider>
    );
    expect(store.getState().addedTodos.size).toEqual(1);
    wrapper.find('.todo-item-remove').simulate('click');
    expect(store.getState().addedTodos.size).toEqual(0);
  });
});
