import { combineReducers } from "redux";
import haveAccountReducer from "./reducers/haveAccountReducer";
import inputReducer from "./reducers/inputReducer";
import logInReducer from "./reducers/logInReducer";
import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import messageReducer from "./reducers/messageReducer";
import editReducer from "./reducers/editReducer";

const reducers = combineReducers({
  haveAccount: haveAccountReducer,
  emailInput: inputReducer,
  logIn: logInReducer,
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  message: messageReducer,
  edit: editReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
