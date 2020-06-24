import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import TodoText from '../../../app/App/TodoItem/TodoText';

describe('TodoText', () => {
  const store = createStore();
  const todo = {
    id: 'todo-1',
    text: 'test task',
    status: TodoStatusEnum.TODO
  };

  it('renders successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoText todo={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('enable editing todo text when edit clicked', () => {
    store.dispatch({ type: 'ADD_TODO', todo: { text: 'test task' } });
    store.dispatch({ type: 'EDIT_TODO', todoId: todo.id });

    const wrapper = mount(
      <Provider store={store}>
        <TodoText todo={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    const input = wrapper.find('input').getDOMNode();
    expect(input.value).toEqual(todo.text);
    input.value = 'test task updated';
    wrapper.find('input').simulate('keydown', { keyCode: 13 });
    expect(store.getState().addedTodos.get(todo.id).text)
      .toEqual('test task updated');
    expect(store.getState().editedTodos.has(todo.id)).toEqual(false);
  });
});
