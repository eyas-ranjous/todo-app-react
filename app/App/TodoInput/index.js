import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

const TodoInput = () => {
  const dispatch = useDispatch();
  let todoInput;

  const addTodo = () => {
    if (!todoInput.value) {
      todoInput.classList.add(styles.required);
      return;
    }
    todoInput.classList.remove(styles.required);
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

  const TextInput = () => (
    <input
      type="text"
      className={styles['todo-text-input']}
      onKeyDown={handleKeyDown}
      placeholder="Write Todo Text..."
      ref={(el) => { todoInput = el; }}
    />
  );

  const AddButton = () => (
    <button onClick={() => addTodo()}>Add</button>
  );

  return (
    <div className={styles['todo-input']}>
      <TextInput />
      <AddButton />
    </div>
  );
};

export default TodoInput;
