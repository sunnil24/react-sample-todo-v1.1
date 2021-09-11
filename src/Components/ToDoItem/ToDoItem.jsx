import React, { useState } from 'react';
import './styles.css';
const ToDoItem = ({ item, toggleHandler, deleteHandler, editHandler }) => {
  const [edit, toggleEdit] = useState(false);
  const [value, setValue] = useState(item.title);

  if (edit) {
    return (
      <form
        method="post"
        onSubmit={e => {
          e.preventDefault();
          editHandler(item.id, value);
          toggleEdit(false);
        }}
      >
        <div className="add-to-do">
          <textarea
            type="search"
            placeholder="add todo item"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
            rows="2"
            cols="30"
          />
          <button type="button" onClick={() => toggleEdit(false)}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
  return (
    <div>
      <span
        onClick={() => {
          toggleHandler(item.id);
        }}
        className="todo-text"
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            toggleHandler(item.id);
          }}
        />
        {item.title}
      </span>
      <span
        className="edit"
        onClick={() => {
          toggleEdit(true);
        }}
      >
        Edit
      </span>
      <span
        className="delete"
        onClick={() => {
          deleteHandler(item.id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default ToDoItem;
