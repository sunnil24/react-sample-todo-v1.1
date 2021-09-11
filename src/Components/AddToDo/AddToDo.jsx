import React, { useState, useCallback } from 'react';
import useStore from '../../hooks/useStore';
import { addToDoItem } from '../../store/actions';
import './styles.css';

const AddToDo = () => {
  const [state, dispatch] = useStore();
  const [value, setValue] = useState('');

  const addToDo = useCallback(
    e => {
      e.preventDefault();
      setValue('');
      if (value) {
        addToDoItem(dispatch, {
          userId: state.todos.length + 1,
          id: state.todos.length + 1,
          title: value,
          completed: false
        });
      }
    },
    [value]
  );

  return (
    <div className="todo-header">
      <h2>ToDo App</h2>
      <form method="post" onSubmit={addToDo}>
        <div className="add-to-do">
          <textarea
            type="search"
            placeholder="add todo item"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
            rows="4"
            cols="30"
          />
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
