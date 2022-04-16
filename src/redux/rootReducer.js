import { combineReducers } from "redux";

import todoReducer from "./modules/reducer";

const rootReducer = combineReducers({
  data: todoReducer,
});

export default rootReducer;
