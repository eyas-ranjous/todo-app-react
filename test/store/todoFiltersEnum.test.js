import { TodoFiltersEnum, TodoFilters } from '../../app/store/TodoFiltersEnum';

describe('todoFiltersEnum', () => {
  it('gets the enum', () => {
    expect(TodoFilters()).toEqual(TodoFiltersEnum);
  });
});
