import React from 'react';

import styles from './styles.css';

import useFilteredTodos from './useFilteredTodos';
import useEditedTodos from './useEditedTodos';

import TodoStatus from '../TodoStatus';
import TodoItem from './TodoItem';

export default ({ todos, todoFilter, updateTodo, removeTodo }) => {
  const { filteredTodos } = useFilteredTodos({ todos, todoFilter });
  const { editedTodos, editTodo, saveEditedTodo } = useEditedTodos(updateTodo);

  const toggleTodoStatus = (todo) => {
    const newStatus = todo.status === TodoStatus.todo
      ? TodoStatus.done
      : TodoStatus.todo;
    updateTodo({ ...todo, ...{ status: newStatus } });
  };

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
