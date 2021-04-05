import { useState } from 'react';

export default (updateItem) => {
  const [editedItems, setEditedItems] = useState(new Set());

  const editItem = (id) => {
    setEditedItems(new Set(editedItems).add(id));
  };

  const unEditItem = (id) => {
    const nextEditedItems = new Set(editedItems);
    nextEditedItems.delete(id);
    setEditedItems(nextEditedItems);
  };

  const saveEditedItem = (item) => {
    unEditItem(item.id);
    updateItem(item);
  };

  return { editedItems, editItem, unEditItem, saveEditedItem };
};
