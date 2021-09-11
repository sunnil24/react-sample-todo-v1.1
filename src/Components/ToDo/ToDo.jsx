import React from 'react';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';
import { StoreProvider } from '../../store';
import Layout from '../Layout';

const ToDo = () => {
  return (
    <StoreProvider>
      <Layout>
        <AddToDo />
        <ToDoList />
      </Layout>
    </StoreProvider>
  );
};

export default ToDo;
