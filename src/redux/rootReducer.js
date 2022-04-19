import { combineReducers } from "redux";

import todoReducer from "./modules/todo/reducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

export default rootReducer;
