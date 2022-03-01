import { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { userHaveAccountAction } from "../reducers/haveAccountReducer";
import { logInAction } from "../reducers/logInReducer";
import { Action } from "../action-types/action-types";
import {
  InputActionType,
  CartAction,
  CartActionType,
  UserActionType,
  UserAction,
} from "../action-types/action-types";
import { MouseEvent } from "react";
import { userPayloadType } from "../action-types/action-types";
import {
  productsPayloadType,
  productsActionInterface,
} from "../reducers/productsReducer";
import { cartItemType } from "../reducers/cartReducer";

export const changeHaveAccount = () => {
  return (dispatch: Dispatch<userHaveAccountAction>) => {
    dispatch({
      type: "SET_USER_HAVE_ACCOUNT",
    });
  };
};

export const handleEmailInput = (e: ChangeEvent<HTMLInputElement> | string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.EMAIL,
      payload: typeof e === "string" ? e : e.target.value,
    });
  };
};

export const handlePasswordInput = (
  e: ChangeEvent<HTMLInputElement> | string
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.PASSWORD,
      payload: typeof e === "string" ? e : e.target.value,
    });
  };
};

export const handleConfirmPasswordInput = (
  e: ChangeEvent<HTMLInputElement> | string
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.CONFIRM_PASSWORD,
      payload: typeof e === "string" ? e : e.target.value,
    });
  };
};

export const handleLogIn = (
  e: MouseEvent<HTMLButtonElement>,
  payload: boolean
) => {
  e.preventDefault();
  return (dispatch: Dispatch<logInAction>) => {
    dispatch({
      type: "SET_LOG_IN",
      payload: payload,
    });
  };
};

export const handleSetUser = (payload: userPayloadType) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.SET_USER,
      payload: payload,
    });
  };
};

export const handleDeleteUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.DELETE_USER,
    });
  };
};

export const handleSetProducts = (payload: productsPayloadType[]) => {
  return (dispathc: Dispatch<productsActionInterface>) => {
    dispathc({
      type: "SET_PRODUCTS",
      payload: payload,
    });
  };
};

export const handleSetCart = (payload: cartItemType) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.SET,
      payload: payload,
    });
  };
};

export const handleDeleteCart = (payload: string) => {
  console.log(payload);

  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.DELETE,
      payload: payload,
    });
  };
};
