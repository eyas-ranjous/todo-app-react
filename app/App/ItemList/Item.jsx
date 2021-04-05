import React, { useRef } from 'react';
import classnames from 'classnames';

import ItemStatus from '../ItemStatus';

import styles from './styles.css';

export default ({
  item,
  toggleItemStatus,
  editItem,
  unEditItem,
  saveEditedItem,
  removeItem,
  isEditing
}) => {
  const itemInput = useRef();

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = itemInput.current.value.trim();
      if (!text) {
        unEditItem(item.id);
        return;
      }
      saveEditedItem({ ...item, ...{ text } });
    }
  };

  return (
    <li>
      <span
        title="change"
        className={styles.icon}
        onClick={() => toggleItemStatus(item)}
      >
        {item.status === ItemStatus.done ? '✅' : '⬜'}
      </span>

      <span title="remove"
        className={classnames(styles.icon, styles['remove-icon'])}
        onClick={() => removeItem(item)}
      >
        ✘
      </span>

      <span
        title="edit"
        className={classnames(styles.icon, styles['edit-icon'])}
        onClick={() => editItem(item.id)}
      >
        ✎
      </span>

      {!isEditing && (
        <span className={item.status === ItemStatus.done
          ? classnames(styles.text, styles.done)
          : styles.text
        }>
          {item.text}
        </span>
      )}

      {isEditing && (
        <input
          type="text"
          onKeyDown={handleEditKeyDown}
          defaultValue={item.text}
          ref={itemInput}
        />
      )}
    </li>
  );
};
