import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import TodoFilters from '../../../app/App/TodoFilters';

describe('TodoFilters', () => {
  const store = createStore();

  it('renders filter buttons', () => {
    const setFilter = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <TodoFilters />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
