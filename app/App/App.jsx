import React, { useReducer, useState } from 'react';

import { itemsReducer, itemsInitialState } from './reducer';
import {
  ItemInput,
  ItemStatusFilter,
  ItemList
} from './components';

import styles from './styles.css';

const App = () => {
  const [state, dispatch] = useReducer(itemsReducer, itemsInitialState);
  return (
    <div className={styles.TodoApp}>
      <ItemInput dispatch={dispatch} />
      <ItemStatusFilter
        dispatch={dispatch}
        itemStatusCount={state.itemStatusCount}
        itemStatusFilter={state.itemStatusFilter}
      />
      <ItemList
        dispatch={dispatch}
        items={state.items}
        editingItems={state.editingItems}
        itemStatusFilter={state.itemStatusFilter}
      />
    </div>
  ); 
};

export { App }
