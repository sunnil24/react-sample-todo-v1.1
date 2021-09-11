import React, { useEffect, useCallback } from 'react';
import useStore from '../../hooks/useStore';
import { fetchToDos, updateToDos } from '../../store/actions';
import './style.css';

import ToDoItem from '../ToDoItem';

export default function ToDoList() {
  const [state, dispatch] = useStore();
  const { todos } = state;

  useEffect(() => {
    fetchToDos(dispatch);
  }, []);

  const toggleToDo = useCallback(
    id => {
      const newData = todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
      updateToDos(dispatch, newData);
    },
    [todos]
  );

  const deleteToDo = useCallback(
    id => {
      const newData = todos.filter(item => item.id !== id);
      updateToDos(dispatch, newData);
    },
    [todos]
  );

  return (
    <ol className="todo-list">
      {todos
        ?.sort((todo1, todo2) => todo2.id - todo1.id)
        ?.map(item => (
          <li
            key={`${item.userId}-${item.title}`}
            className={item.completed ? 'completed' : ''}
          >
            <ToDoItem
              item={item}
              toggleHandler={toggleToDo}
              deleteHandler={deleteToDo}
            />
          </li>
        ))}
    </ol>
  );
}
