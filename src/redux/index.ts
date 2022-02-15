import { combineReducers } from "redux";
import haveAccountReducer from "./reducers/haveAccountReducer";
import inputReducer from "./reducers/inputReducer";

const reducers = combineReducers({
  haveAccount: haveAccountReducer,
  emailInput: inputReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
