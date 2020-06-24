import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { TodoFiltersEnum } from '../../../app/store/TodoFiltersEnum';
import { TodoStatusEnum } from '../../../app/store/TodoStatusEnum';
import createStore from '../../../app/store';
import DoneFilterButton from '../../../app/App/TodoFilters/DoneFilterButton';

describe('DoneFilterButton', () => {
  const store = createStore();

  it('renders filter button', () => {
    const setFilter = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <DoneFilterButton setFilter={setFilter} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(setFilter)
      .toHaveBeenCalledWith([TodoStatusEnum.DONE], TodoFiltersEnum.DONE);
  });

  it('renders filter button being selected', () => {
    const setFilter = jest.fn();
    store.dispatch({
      type: 'SET_SELECTED_STATUS_FILTER',
      filter: TodoFiltersEnum.DONE
    });
    const wrapper = mount(
      <Provider store={store}>
        <DoneFilterButton setFilter={setFilter} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
