import * as types from "../../actionTypes";

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

export const fetchTodoDetail = (payload = {}) => ({
  type: types.FETCH_DETAIL_TODO,
  ...payload,
});

export const fetchTodoDetailSuccess = (payload = {}) => ({
  type: types.FETCH_DETAIL_TODO_SUCCESS,
  ...payload,
});

export const fetchTodoDetailFail = (error) => ({
  type: types.FETCH_DETAIL_TODO_FAILURE,
  payload: error,
});

export const createTodo = (todo) => ({
  type: types.CREATE_TODO,
  payload: todo,
});

export const createTodoSuccess = () => ({
  type: types.CREATE_TODO_SUCCESS,
});

export const createTodoFail = (error) => ({
  type: types.CREATE_TODO_FAILURE,
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

export const updateTodoStatus = (todo) => ({
  type: types.UPDATE_STATUS_TODO,
  payload: todo,
});

export const updateTodoStatusSuccess = () => ({
  type: types.UPDATE_STATUS_TODO_SUCCESS,
});

export const updateTodoStatusFail = (error) => ({
  type: types.UPDATE_STATUS_TODO_FAILURE,
  payload: error,
});
