import { TodoFiltersEnum, TodoFilters } from '../TodoFiltersEnum';

describe('todoFiltersEnum', () => {
  it('gets the enum', () => {
    expect(TodoFilters()).toEqual(TodoFiltersEnum);
  });
});
