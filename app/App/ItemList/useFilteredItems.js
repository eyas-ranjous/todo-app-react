import { useState, useEffect } from 'react';

export default ({ items, itemStatusFilter }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const nextFilteredItems = [];
    items.forEach((item) => {
      if (!itemStatusFilter || itemStatusFilter === item.status) {
        nextFilteredItems.push(item);
      }
    });
    setFilteredItems(nextFilteredItems);
  }, [items, itemStatusFilter]);

  return { filteredItems };
};
