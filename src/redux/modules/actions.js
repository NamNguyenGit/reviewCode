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

export const fetchTodoDetail = (id) => ({
  type: types.FETCH_DETAIL_TODO,
  payload: id,
});

export const fetchTodoDetailSuccess = (todo) => ({
  type: types.FETCH_DETAIL_TODO_SUCCESS,
  payload: todo,
});

export const fetchTodoDetailFail = (error) => ({
  type: types.FETCH_DETAIL_TODO_FAILURE,
  payload: error,
});

export const filterTodo = (value) => ({
  type: types.FILTER_TODO,
  payload: value,
});

export const filterTodoSuccess = (todo) => ({
  type: types.FILTER_TODO_SUCCESS,
  payload: todo,
});

export const filterTodoFail = (error) => ({
  type: types.FILTER_TODO_FAILURE,
  payload: error,
});
