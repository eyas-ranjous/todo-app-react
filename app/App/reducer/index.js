import { ItemAction } from '../types';

export const itemsInitialState = {
  items: new Map(),
  editingItems: new Set(),
  itemStatusCount: new Map(),
  itemStatusFilter: null
};

export const itemsReducer = (state, action) => {
  const { items, editingItems, itemStatusCount } = state;
  switch (action.type) {
    case ItemAction.ADD: {
      const newItem = action.payload;
      const newItems = new Map(items);
      const newItemStatusCount = new Map(itemStatusCount);
      const newItemId = items.size + 1;
      newItems.set(newItemId, { ...newItem, id: newItemId });
      const newCount = (newItemStatusCount.get(newItem.status) || 0) + 1;
      newItemStatusCount.set(newItem.status, newCount);
      return {
        ...state,
        ...{
          items: newItems,
          itemStatusCount: newItemStatusCount
        }
      };
    }

    case ItemAction.UPDATE: {
      const editedItem = action.payload;
      const newItems = new Map(items);
      const newItemStatusCount = new Map(itemStatusCount);
      const newEditingItems = new Set(editingItems);
      const existingItem = items.get(editedItem.id);
      if (editedItem.status !== existingItem.status) {
        newItemStatusCount.set(
          existingItem.status,
          (newItemStatusCount.get(existingItem.status) || 0) - 1
        );
        newItemStatusCount.set(
          editedItem.status,
          (newItemStatusCount.get(editedItem.status) || 0) + 1
        );
      }
      newItems.set(
        editedItem.id,
        {
          ...newItems.get(editedItem.id),
          ...editedItem
        }
      );
      newEditingItems.delete(editedItem.id);
      return {
        ...state,
        ...{
          items: newItems,
          itemStatusCount: newItemStatusCount,
          editingItems: newEditingItems
        }
      };
    }

    case ItemAction.EDIT: {
      const editedItemId = action.payload;
      const newEditingItems = new Set(editingItems);
      newEditingItems.add(editedItemId);
      return {
        ...state,
        ...{
          editingItems: newEditingItems
        }
      };
    }

    case ItemAction.UNEDIT: {
      const uneditedItemId = action.payload;
      const newEditingItems = new Set(editingItems);
      newEditingItems.delete(uneditedItemId);
      return {
        ...state,
        ...{
          editingItems: newEditingItems
        }
      };
    }

    case ItemAction.REMOVE: {
      const newItems = new Map(items);
      const newItemStatusCount = new Map(itemStatusCount);
      const newEditingItems = new Set(editingItems);
      const removedItem = action.payload;
      newEditingItems.delete(removedItem.id);
      newItems.delete(removedItem.id);
      newItemStatusCount.set(
        removedItem.status,
        newItemStatusCount.get(removedItem.status) - 1
      );
      return {
        ...state,
        ...{
          items: newItems,
          itemStatusCount: newItemStatusCount,
          editingItems: newEditingItems
        }
      };
    }

    case ItemAction.STATUS_FILTER: {
      const filterStatus = action.payload;
      return {
        ...state,
        ...{
          itemStatusFilter: filterStatus
        }
      };
    }

    default:
      return state;
  }
};
