import React, { createContext, useReducer } from 'react';
import todoReducer from './reducers';

const initialState = {
  todos: []
};

const Store = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { initialState, Store as default, StoreProvider };
