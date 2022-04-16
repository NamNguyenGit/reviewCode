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

import * as types from "./actionTypes";
import { fetchTodoSuccess, fetchTodoFail } from "./actions";
import { getAllTodo } from "../api/todoApi";

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

function* loadTodo() {
  yield takeEvery(types.FETCH_ALL_TODO, onLoadTodo);
}

const todoSaga = [fork(loadTodo)];

export default function* rootSaga() {
  yield all([...todoSaga]);
}
