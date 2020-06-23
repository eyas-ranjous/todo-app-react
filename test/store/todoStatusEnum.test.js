import { TodoStatusEnum, TodoStatus } from '../../app/store/TodoStatusEnum';

describe('TodoStatusEnum', () => {
  it('gets the enum', () => {
    expect(TodoStatus()).toEqual(TodoStatusEnum);
  });
});
