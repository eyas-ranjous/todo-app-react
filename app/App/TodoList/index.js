import React, { useState, useEffect } from 'react';

import Filters from '../TodoFilters/Filters';
import TodoStatus from './TodoStatus';
import TodoItem from './TodoItem';
import styles from './styles.css';

export default ({ todos, todoFilter, updateTodo, removeTodo }) => {
  const [editedTodos, setEditedTodos] = useState(new Set());
  const [filteredTodos, setFilteredTodos] = useState([]);
  console.log('rendered TodoList');
  useEffect(() => {
    const newFilteredTodos = [];
    todos.forEach((todo) => {
      if (todoFilter === Filters.All || todo.status === todoFilter) {
        newFilteredTodos.push(todo);
      }
    });
    setFilteredTodos(newFilteredTodos);
  }, [todoFilter, todos]);

  const editTodo = (id) => {
    setEditedTodos(new Set(editedTodos).add(id));
  };

  const saveEditedTodo = (todo) => {
    const newEditedTodos = new Set(editedTodos);
    newEditedTodos.delete(todo.id);
    setEditedTodos(newEditedTodos);
    updateTodo(todo);
  };

  const toggleTodoStatus = (todo) => {
    const newStatus = todo.status === TodoStatus.Todo
      ? TodoStatus.Done
      : TodoStatus.Todo;
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
