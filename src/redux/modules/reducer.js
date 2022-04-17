import * as types from "../actionTypes";

const initialState = {
  todo: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TODO:
    case types.FILTER_TODO:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_DETAIL_TODO:
      return {
        ...state,
        loading: true,
        id: action.payload,
      };
    case types.FETCH_ALL_TODO_SUCCESS:
    case types.FETCH_DETAIL_TODO_SUCCESS:
    case types.FILTER_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case types.FETCH_ALL_TODO_FAILURE:
    case types.FETCH_DETAIL_TODO_FAILURE:
    case types.FILTER_TODO_FAILURE:
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
