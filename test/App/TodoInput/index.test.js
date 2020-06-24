import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import TodoInput from '../../../app/App/TodoInput';

describe('TodoInput', () => {
  const store = createStore();

  it('renders successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('add todo on button click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const input = wrapper.find('input').getDOMNode();
    const button = wrapper.find('button');
    input.value = 'test task';
    expect(input.value).toEqual('test task');
    button.simulate('click');
    expect(input.value).toEqual('');
    expect(Array.from(store.getState().addedTodos)).toEqual([
      [
        'todo-1',
        { id: 'todo-1', text: 'test task', status: TodoStatusEnum.TODO }
      ]
    ]);
  });

  it('add todo on input key down', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const input = wrapper.find('input').getDOMNode();
    const button = wrapper.find('button');
    input.value = 'test task';
    expect(input.value).toEqual('test task');
    wrapper.find('input').simulate('keydown', { keyCode: 13 });
    expect(input.value).toEqual('');
    expect(Array.from(store.getState().addedTodos)).toEqual([
      [
        'todo-1',
        { id: 'todo-1', text: 'test task', status: TodoStatusEnum.TODO }
      ],
      [
        'todo-2',
        { id: 'todo-2', text: 'test task', status: TodoStatusEnum.TODO }
      ]
    ]);
  });
});
