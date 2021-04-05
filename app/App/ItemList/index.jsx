import React from 'react';

import useFilteredItems from './useFilteredItems';
import useEditedItems from './useEditedItems';
import useToggleItemStatus from './useToggleItemStatus';

import Item from './Item';

import styles from './styles.css';

export default ({ items, itemStatusFilter, updateItem, removeItem }) => {
  const { filteredItems } = useFilteredItems({ items, itemStatusFilter });
  const { toggleItemStatus } = useToggleItemStatus(updateItem);
  const {
    editedItems,
    editItem,
    unEditItem,
    saveEditedItem
  } = useEditedItems(updateItem);

  return (
    <div className={styles['item-list']}>
      {filteredItems.length === 0 && (
        <div>No Items Found</div>
      )}

      {filteredItems.length > 0 && (
        <ul>
          {filteredItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              isEditing={editedItems.has(item.id)}
              editItem={editItem}
              unEditItem={unEditItem}
              saveEditedItem={saveEditedItem}
              toggleItemStatus={toggleItemStatus}
              removeItem={removeItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
