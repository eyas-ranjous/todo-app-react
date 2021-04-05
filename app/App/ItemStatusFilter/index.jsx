import React from 'react';

import ItemStatus from '../ItemStatus';

import styles from './styles.css';

export default React.memo(({
  todoCount,
  doneCount,
  itemStatusFilter,
  setItemStatusFilter
}) => (
  <div className={styles['item-status-filter']}>
    <button
      className={styles[`all${!itemStatusFilter ? '-selected' : ''}`]}
      onClick={setItemStatusFilter.bind(null, null)}
    >
      All ({todoCount + doneCount})
    </button>

    <button
      className={styles[`todo${itemStatusFilter === ItemStatus.todo ? '-selected' : ''}`]}
      onClick={setItemStatusFilter.bind(null, ItemStatus.todo)}
    >
      To Do ({todoCount})
    </button>

    <button
      className={styles[`done${itemStatusFilter === ItemStatus.done ? '-selected' : ''}`]}
      onClick={setItemStatusFilter.bind(null, ItemStatus.done)}
    >
      Done ({doneCount})
    </button>
  </div>
));
