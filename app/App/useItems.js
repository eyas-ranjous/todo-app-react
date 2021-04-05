import { useState } from 'react';

import ItemStatus from './ItemStatus';

export default () => {
  const [items, setItems] = useState(new Map());
  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const addItem = (item) => {
    const newItemId = items.size + 1;
    const nextItems = new Map(items);
    setItems(nextItems.set(newItemId, { ...item, id: newItemId }));
    setTodoCount(todoCount + 1);
  };

  const updateItem = (item) => {
    if (item.status !== items.get(item.id).status) {
      if (item.status === ItemStatus.todo) {
        setTodoCount(todoCount + 1);
        setDoneCount(doneCount - 1);
      } else if (item.status === ItemStatus.done) {
        setTodoCount(todoCount - 1);
        setDoneCount(doneCount + 1);
      }
    }

    const nextItems = new Map(items);
    setItems(nextItems.set(item.id, { ...item }));
  };

  const removeItem = (item) => {
    const nextItems = new Map(items);
    nextItems.delete(item.id);
    setItems(nextItems);
    if (item.status === ItemStatus.todo) {
      setTodoCount(todoCount - 1);
    } else if (item.status === ItemStatus.done) {
      setDoneCount(doneCount - 1);
    }
  };

  return {
    items,
    todoCount,
    doneCount,
    addItem,
    updateItem,
    removeItem
  };
};
