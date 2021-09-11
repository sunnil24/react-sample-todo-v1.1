import { FETCH_TODOS, UPDATE_TODOS, ADD_TODO } from './actionsTypes';
export const fetchToDos = async dispatch => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
  const respData = await resp.json();
  dispatch({
    type: FETCH_TODOS,
    payload: {
      data: respData
    }
  });
};

export const updateToDos = async (dispatch, data) => {
  dispatch({
    type: UPDATE_TODOS,
    payload: {
      data
    }
  });
};

export const addToDoItem = (dispatch, data) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      data
    }
  });
};
