import React, { useCallback, useRef } from 'react';

import { ItemStatus, ItemAction } from '../../types';

import styles from './styles.css';

const ItemInput = React.memo(({ dispatch }) => {
  const itemInput = useRef();

  const addTodo = useCallback(() => {
    const text = itemInput.current.value.trim();
    if (!text) return;

    dispatch({
      type: ItemAction.ADD,
      payload: {
        text,
        status: ItemStatus.TODO
      }
    });
    itemInput.current.value = '';
  }, [itemInput.current]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }, [addTodo]);

  return (
    <div className={styles['item-input']}>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="New Todo..."
        ref={itemInput}
      />
    </div>
  );
});

export { ItemInput }
