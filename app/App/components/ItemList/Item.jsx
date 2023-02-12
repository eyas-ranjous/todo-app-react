import React, { useCallback, useRef } from 'react';
import classnames from 'classnames';

import { ItemAction, ItemStatus } from '../../types';

import styles from './styles.css';

const Item = ({
  item,
  dispatch,
  isEditing
}) => {
  const itemInput = useRef();

  const removeItem = useCallback(() => {
    dispatch({
      type: ItemAction.REMOVE,
      payload: item
    });
  }, [item]);

  const editItem = useCallback(() => {
    dispatch({
      type: ItemAction.EDIT,
      payload: item.id
    });
  }, [item.id]);

  const saveItem = useCallback((e) => {
    if (e.key === 'Enter') {
      const text = itemInput.current.value.trim();
      if (!text) {
        dispatch({
          type: ItemAction.UNEDIT,
          payload: item.id
        });
        return;
      }
      dispatch({
        type: ItemAction.UPDATE,
        payload: { ...item, ...{ text } }
      });
    }
  }, [item, itemInput.current]);

  const toggleItemStatus = useCallback(() => {
    const newStatus = item.status === ItemStatus.TODO
      ? ItemStatus.DONE
      : ItemStatus.TODO;

    dispatch({
      type: ItemAction.UPDATE,
      payload: {
        ...item,
        ...{ status: newStatus }
      }
    });
  }, [item]);

  return (
    <li>
      <span
        title="change"
        className={styles.icon}
        onClick={toggleItemStatus}
      >
        {item.status === ItemStatus.DONE ? '✅' : '⬜'}
      </span>

      <span title="remove"
        className={classnames(styles.icon, styles['remove-icon'])}
        onClick={removeItem}
      >
        ✘
      </span>

      <span
        title="edit"
        className={classnames(styles.icon, styles['edit-icon'])}
        onClick={editItem}
      >
        ✎
      </span>

      {!isEditing && (
        <span className={item.status === ItemStatus.DONE
          ? classnames(styles.text, styles.done)
          : styles.text
        }>
          {item.text}
        </span>
      )}

      {isEditing && (
        <input
          type="text"
          onKeyDown={saveItem}
          defaultValue={item.text}
          ref={itemInput}
        />
      )}
    </li>
  );
};

export { Item }
