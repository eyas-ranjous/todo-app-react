import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
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
});
