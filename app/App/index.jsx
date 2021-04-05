import React, { useState } from 'react';

import useTodos from './useItems';

import ItemInput from './ItemInput';
import ItemFilters from './ItemStatusFilter';
import ItemList from './ItemList';

import styles from './styles.css';

export default () => {
  const {
    items,
    todoCount,
    doneCount,
    addItem,
    updateItem,
    removeItem
  } = useTodos();

  const [itemStatusFilter, setItemStatusFilter] = useState(null);

  return (
    <div className={styles['todo-app']}>
      <h1>A Todo App in React & Hooks</h1>
      <ItemInput addItem={addItem} />
      <ItemFilters
        todoCount={todoCount}
        doneCount={doneCount}
        itemStatusFilter={itemStatusFilter}
        setItemStatusFilter={setItemStatusFilter}
      />
      <ItemList
        items={items}
        itemStatusFilter={itemStatusFilter}
        updateItem={updateItem}
        removeItem={removeItem}
      />
    </div>
  );
};
