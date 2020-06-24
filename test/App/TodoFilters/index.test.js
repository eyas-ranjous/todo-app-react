import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import createStore from '../../../app/store';
import { TodoFiltersEnum } from '../../../app/store/TodoFiltersEnum';
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

  it('set filter state when a filter button is clicked', () => {
    const setFilter = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <TodoFilters />
      </Provider>
    );
    wrapper.find('.filter-button-done').simulate('click');
    const { todoFilterSet, selectedFilter } = store.getState();
    expect(Array.from(todoFilterSet)).toEqual([TodoFiltersEnum.DONE]);
    expect(selectedFilter).toEqual(TodoFiltersEnum.DONE);
  });
});
