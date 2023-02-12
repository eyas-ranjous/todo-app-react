import React, { useEffect, useState } from 'react';

import { Item } from './Item';

import styles from './styles.css';

const ItemList = (props) => {
  const {
    dispatch,
    items,
    editingItems,
    itemStatusFilter
  } = props;
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = [];
    items.forEach((item) => {
      if (!itemStatusFilter || itemStatusFilter === item.status) {
        filtered.push(item);
      }
    });
    setFilteredItems(filtered);
  }, [items, itemStatusFilter]);

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
              dispatch={dispatch}
              isEditing={editingItems.has(item.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export { ItemList }
