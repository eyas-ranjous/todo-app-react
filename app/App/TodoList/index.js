import React from 'react';

import useFilteredTodos from './useFilteredTodos';
import useEditedTodos from './useEditedTodos';
import useToggleTodoStatus from './useToggleTodoStatus';

import TodoItem from './TodoItem';

import styles from './styles.css';

export default ({ todos, todoFilter, updateTodo, removeTodo }) => {
  const { filteredTodos } = useFilteredTodos({ todos, todoFilter });
  const { editedTodos, editTodo, saveEditedTodo } = useEditedTodos(updateTodo);
  const { toggleTodoStatus } = useToggleTodoStatus(updateTodo);

  return (
    <div className={styles['todo-list']}>
      {filteredTodos.length === 0 && (
        <div className={styles['no-todos-msg']}>No Todos Found</div>
      )}

      {filteredTodos.length > 0 && (
        <ul className={styles['todo-list']}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editedTodos.has(todo.id)}
              editTodo={editTodo}
              saveEditedTodo={saveEditedTodo}
              toggleTodoStatus={toggleTodoStatus}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
