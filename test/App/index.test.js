import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../app/store';
import TodoApp from '../../app/App';

describe('TodoApp', () => {
  const store = createStore();

  it('renders successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
