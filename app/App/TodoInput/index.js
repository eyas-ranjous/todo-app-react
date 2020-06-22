import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

const TodoInput = () => {
  const dispatch = useDispatch();
  const TodoStatus = useSelector((state) => state.TodoStatus);
  let todoInput;

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      todo: { text: todoInput.value }
    });
    todoInput.value = '';
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div className={styles['todo-input']}>
      <input
        type="text"
        className={styles['todo-text-input']}
        onKeyDown={handleKeyDown}
        placeholder="Write Todo Text..."
        ref={(el) => { todoInput = el; }}
      />
      <button
        onClick={() => addTodo()}
      >
      Add
      </button>
    </div>
  );
};

export default TodoInput;
