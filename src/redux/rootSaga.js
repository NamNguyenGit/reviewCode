import { call, all, spawn } from "redux-saga/effects";
import todoSaga from "./modules/todo/saga";

function* rootSaga() {
  const sagas = [todoSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
