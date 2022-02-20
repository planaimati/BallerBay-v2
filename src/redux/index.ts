import { combineReducers } from "redux";
import haveAccountReducer from "./reducers/haveAccountReducer";
import inputReducer from "./reducers/inputReducer";
import logInReducer from "./reducers/logInReducer";
import userReducer from "./reducers/userReducer"

const reducers = combineReducers({
  haveAccount: haveAccountReducer,
  emailInput: inputReducer,
  logIn: logInReducer,
  user: userReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
