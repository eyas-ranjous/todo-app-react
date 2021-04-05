import ItemStatus from '../ItemStatus';

export default (updateTodo) => {
  const toggleItemStatus = (item) => {
    const newStatus = item.status === ItemStatus.todo
      ? ItemStatus.done
      : ItemStatus.todo;

    updateTodo({ ...item, ...{ status: newStatus } });
  };

  return { toggleItemStatus };
};
