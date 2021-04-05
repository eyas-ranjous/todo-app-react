import React, { useRef } from 'react';

import ItemStatus from '../ItemStatus';

import styles from './styles.css';

export default React.memo(({ addItem }) => {
  const itemInput = useRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = itemInput.current.value.trim();
      if (!text) return;

      addItem({ text, status: ItemStatus.todo });
      itemInput.current.value = '';
    }
  };

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
