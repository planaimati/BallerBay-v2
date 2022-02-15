import { ChangeEvent } from "react";
import { Dispatch } from "redux";
import { userHaveAccountAction } from "../reducers/haveAccountReducer";
import { Action } from "../action-types/index";
import { InputActionType } from "../action-types/index";

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

export const handleConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>)=>{
  return(dispatch: Dispatch<Action>)=>{
    dispatch({
      type: InputActionType.CONFIRM_PASSWORD,
      payload: e.target.value
    })
  }
}
