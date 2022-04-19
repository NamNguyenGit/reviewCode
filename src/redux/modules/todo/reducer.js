import * as types from "../../actionTypes";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  todos: {
    data: [],
    loading: false,
    error: null,
  },

  todo: {
    data: {},
    loading: false,
    error: null,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //* FETCH LIST TODOS
    case types.FETCH_ALL_TODO: {
      const nextState = cloneDeep(state);
      nextState.todos.loading = true;
      return nextState;
    }

    case types.FETCH_ALL_TODO_SUCCESS: {
      const nextState = cloneDeep(state);
      nextState.todos.loading = false;
      nextState.todos.data = action.payload;
      return nextState;
    }

    case types.FETCH_ALL_TODO_FAILURE: {
      const nextState = cloneDeep(state);
      nextState.todos.loading = false;
      nextState.todos.data = [];
      nextState.todos.error = action.payload;
      return nextState;
    }

    //* FETCH TODO
    case types.FETCH_DETAIL_TODO: {
      const nextState = cloneDeep(state);
      nextState.todo.loading = true;
      return nextState;
    }

    case types.FETCH_DETAIL_TODO_SUCCESS: {
      const nextState = cloneDeep(state);
      nextState.todo.loading = false;
      nextState.todo.data = action.todo;
      return nextState;
    }

    case types.FETCH_DETAIL_TODO_FAILURE: {
      const nextState = cloneDeep(state);
      nextState.todo.loading = false;
      nextState.todo.data = [];
      nextState.todo.error = action.payload;
      return nextState;
    }

    default:
      return state;
  }
};

export default todoReducer;
