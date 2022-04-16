import * as types from "./actionTypes";

const initialState = {
  todo: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TODO:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case types.FETCH_ALL_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
