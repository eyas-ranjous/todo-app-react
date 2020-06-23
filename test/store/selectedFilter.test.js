import selectedFilter from '../selectedFilter';
import { TodoFiltersEnum } from '../TodoFiltersEnum';

describe('selectedFilter', () => {
  let state;

  it('set selected filter', () => {
    const state = selectedFilter(TodoFiltersEnum.ALL, {
      type: 'SET_SELECTED_STATUS_FILTER',
      filter: TodoFiltersEnum.TODO
    });
    expect(state).toEqual(TodoFiltersEnum.TODO);
  });
});
