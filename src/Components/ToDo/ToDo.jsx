import React from 'react';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';
import { StoreProvider } from '../../store';

const ToDo = () => {
  return (
    <StoreProvider>
      <AddToDo />
      <ToDoList />
    </StoreProvider>
  );
};

export default ToDo;
