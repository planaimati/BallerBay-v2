import { combineReducers } from "redux";
import haveAccountReducer from "./reducers/haveAccountReducer";
import inputReducer from "./reducers/inputReducer";
import logInReducer from "./reducers/logInReducer";
import userReducer from "./reducers/userReducer"
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const reducers = combineReducers({
  haveAccount: haveAccountReducer,
  emailInput: inputReducer,
  logIn: logInReducer,
  user: userReducer,
  products: productsReducer,
  cart: cartReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
