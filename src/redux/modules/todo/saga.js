import {
  take,
  all,
  put,
  takeLatest,
  takeEvery,
  delay,
  call,
  fork,
} from "redux-saga/effects";

import * as types from "../../actionTypes";
import {
  fetchTodoSuccess,
  fetchTodoFail,
  fetchTodoDetailSuccess,
  fetchTodoDetailFail,
  createTodoSuccess,
  createTodoFail,
  filterTodoSuccess,
  filterTodoFail,
  updateTodoStatusSuccess,
  updateTodoStatusFail,
} from "./actions";

import {
  getAllTodo,
  getDetailTodo,
  createTodo,
  filterTodo,
  updateTodoStatus,
} from "../../../constants/api/todoApi";

function* onLoadTodo() {
  try {
    const response = yield call(getAllTodo);
    if (response.status === 200) {
      yield put(fetchTodoSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchTodoFail(error.response.data));
  }
}

function* onLoadTodoDetail({ id }) {
  try {
    const response = yield call(getDetailTodo, id);
    if (response.status === 200) {
      console.log("response", response.data);
      yield put(fetchTodoDetailSuccess({ todo: response?.data || {} }));
    }
  } catch (error) {
    yield put(fetchTodoDetailFail(error.response.data));
  }
}

function* onCreateTodo({ payload }) {
  try {
    const response = yield call(createTodo, payload);
    if (response.status === 200) {
      yield put(createTodoSuccess(response.data));
    }
  } catch (error) {
    yield put(createTodoFail(error.response.data));
  }
}

function* onUpdateTodoStatus({ payload: { id, values } }) {
  try {
    const response = yield call(updateTodoStatus, id, values);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateTodoStatusSuccess());
    }
  } catch (error) {
    yield put(updateTodoStatusFail(error.response.data));
  }
}

function* onFilterTodo({ payload: value }) {
  try {
    const response = yield call(filterTodo, value);
    if (response.status === 200) {
      yield put(filterTodoSuccess(response.data));
    }
  } catch (error) {
    yield put(filterTodoFail(error.response.data));
  }
}

export default function* watchSaga() {
  yield takeEvery(types.UPDATE_STATUS_TODO, onUpdateTodoStatus);
  yield takeLatest(types.FILTER_TODO, onFilterTodo);
  yield takeEvery(types.CREATE_TODO, onCreateTodo);
  yield takeLatest(types.FETCH_DETAIL_TODO, onLoadTodoDetail);
  yield takeEvery(types.FETCH_ALL_TODO, onLoadTodo);
}
