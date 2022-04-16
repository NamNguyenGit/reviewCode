import * as types from "../actionTypes";

export const fetchTodo = () => ({
  type: types.FETCH_ALL_TODO,
});

export const fetchTodoSuccess = (todo) => ({
  type: types.FETCH_ALL_TODO_SUCCESS,
  payload: todo,
});

export const fetchTodoFail = (error) => ({
  type: types.FETCH_ALL_TODO_FAILURE,
  payload: error,
});
