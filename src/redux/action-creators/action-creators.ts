import { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { userHaveAccountAction } from "../reducers/haveAccountReducer";
import { logInAction } from "../reducers/logInReducer";
import { Action } from "../action-types/action-types";
import { InputActionType } from "../action-types/action-types";
import { MouseEvent } from "react";
import { userActionInterface } from "../reducers/userReducer";
import { payloadType } from "../reducers/userReducer";


export const changeHaveAccount = () => {
  return (dispatch: Dispatch<userHaveAccountAction>) => {
    dispatch({
      type: "SET_USER_HAVE_ACCOUNT",
    });
  };
};

export const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.EMAIL,
      payload: e.target.value,
    });
  };
};

export const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.PASSWORD,
      payload: e.target.value,
    });
  };
};

export const handleConfirmPasswordInput = (
  e: ChangeEvent<HTMLInputElement>
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: InputActionType.CONFIRM_PASSWORD,
      payload: e.target.value,
    });
  };
};

export const handleLogIn = (e: MouseEvent<HTMLButtonElement>, payload: boolean) => {
  e.preventDefault();
  return (dispatch: Dispatch<logInAction>) => {
    dispatch({
      type: "SET_LOG_IN",
      payload: payload
    });
  };
};

export const handleSetUser = (payload: payloadType )=>{
  return (dispatch: Dispatch<userActionInterface>)=>{
    dispatch({
      type: "SET_USER",
      payload: payload
    })
  }
}
