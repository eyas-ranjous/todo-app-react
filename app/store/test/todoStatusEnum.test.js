import { TodoStatusEnum, TodoStatus } from '../TodoStatusEnum';

describe('TodoStatusEnum', () => {
  it('gets the enum', () => {
    expect(TodoStatus()).toEqual(TodoStatusEnum);
  });
});
