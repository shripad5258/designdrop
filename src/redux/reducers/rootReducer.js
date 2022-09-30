import { combineReducers } from "redux";
import loadingActionReducer from "./spinnerReducer";
import { userAuthReducer } from "./userAuthReducer";

const rootReducer = combineReducers({
  user: userAuthReducer,
  loading:loadingActionReducer,
});

export default rootReducer;
