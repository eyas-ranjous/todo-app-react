import React, { useCallback, useState } from 'react';

import { ItemStatus, ItemAction } from '../../types';

import styles from './styles.css';

const ItemStatusFilter = React.memo(({
  dispatch,
  itemStatusCount,
  itemStatusFilter,
}) => {
  const todoCount = itemStatusCount?.get(ItemStatus.TODO) || 0;
  const doneCount = itemStatusCount?.get(ItemStatus.DONE) || 0;

  const updateStatusFilter = useCallback((itemStatus) => {
    dispatch({
      type: ItemAction.STATUS_FILTER,
      payload: itemStatus
    });
  }, []);

  return (
    <div className={styles['item-status-filter']}>
      <button
        className={styles[`all${!itemStatusFilter ? '-selected' : ''}`]}
        onClick={updateStatusFilter.bind(null, null)}
      >
        All ({ todoCount + doneCount })
      </button>

      <button
        className={styles[`todo${itemStatusFilter === ItemStatus.TODO ? '-selected' : ''}`]}
        onClick={updateStatusFilter.bind(null, ItemStatus.TODO)}
      >
        To Do ({ todoCount })
      </button>

      <button
        className={styles[`done${itemStatusFilter === ItemStatus.DONE ? '-selected' : ''}`]}
        onClick={updateStatusFilter.bind(null, ItemStatus.DONE)}
      >
        Done ({ doneCount })
      </button>
    </div>
  );
});

export { ItemStatusFilter }
