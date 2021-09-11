import { FETCH_TODOS, UPDATE_TODOS, ADD_TODO } from './actionsTypes';

export default (state, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case UPDATE_TODOS: {
      const {
        payload: { data }
      } = action;
      return {
        todos: data
      };
    }
    case ADD_TODO: {
      const {
        payload: { data }
      } = action;
      return {
        todos: [...state.todos, data]
      };
    }
    default: {
      return state;
    }
  }
};
