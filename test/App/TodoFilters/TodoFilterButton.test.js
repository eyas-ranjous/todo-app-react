import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { TodoFiltersEnum } from '../../../app/store/TodoFiltersEnum';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import createStore from '../../../app/store';
import TodoFilterButton from '../../../app/App/TodoFilters/TodoFilterButton';

describe('TodoFilterButton', () => {
  const store = createStore();

  it('renders filter button', () => {
    const setFilter = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <TodoFilterButton setFilter={setFilter} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(setFilter)
      .toHaveBeenCalledWith([TodoStatusEnum.TODO], TodoFiltersEnum.TODO);
  });

  it('renders filter button being selected', () => {
    const setFilter = jest.fn();
    store.dispatch({
      type: 'SET_SELECTED_STATUS_FILTER',
      filter: TodoFiltersEnum.TODO
    });
    const wrapper = mount(
      <Provider store={store}>
        <TodoFilterButton setFilter={setFilter} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
