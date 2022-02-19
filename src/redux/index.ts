import { combineReducers } from "redux";
import haveAccountReducer from "./reducers/haveAccountReducer";
import inputReducer from "./reducers/inputReducer";
import logInReducer from "./reducers/logInReducer";

const reducers = combineReducers({
  haveAccount: haveAccountReducer,
  emailInput: inputReducer,
  logIn: logInReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
