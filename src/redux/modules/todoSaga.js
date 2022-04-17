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

import * as types from "../actionTypes";
import {
  fetchTodoSuccess,
  fetchTodoFail,
  fetchTodoDetailSuccess,
  fetchTodoDetailFail,
  filterTodoSuccess,
  filterTodoFail,
} from "./actions";
import {
  getAllTodo,
  getDetailTodo,
  filterTodo,
} from "../../constants/api/todoApi";

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

function* onLoadTodoDetail({ payload: id }) {
  try {
    const response = yield call(getDetailTodo, id);
    if (response.status === 200) {
      yield put(fetchTodoDetailSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchTodoDetailFail(error.response.data));
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

function* loadTodo() {
  yield takeEvery(types.FETCH_ALL_TODO, onLoadTodo);
}

function* loadTodoDetail() {
  yield takeLatest(types.FETCH_DETAIL_TODO, onLoadTodoDetail);
}

function* filterTodoStart() {
  yield takeLatest(types.FILTER_TODO, onFilterTodo);
}

const todoSaga = [fork(loadTodo), fork(loadTodoDetail), fork(filterTodoStart)];

export default function* rootSaga() {
  yield all([...todoSaga]);
}
