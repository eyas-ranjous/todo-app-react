import todoFilterSet from '../../app/store/todoFilterSet';
import { TodoStatusEnum } from '../../app/store/TodoStatusEnum';

describe('todoFilterSet', () => {
  it('add a status list', () => {
    const state = todoFilterSet(new Set(), {
      type: 'UPDATE_STATUS_FILTER_SET',
      statusList: [TodoStatusEnum.TODO, TodoStatusEnum.DONE]
    });
    expect(Array.from(state)).toEqual([
      TodoStatusEnum.TODO,
      TodoStatusEnum.DONE
    ]);
  });
});
