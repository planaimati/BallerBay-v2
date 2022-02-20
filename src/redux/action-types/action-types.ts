export enum InputActionType {
  EMAIL = "SET_USER_EMAIL",
  PASSWORD = "SET_USER_PASSWORD",
  CONFIRM_PASSWORD = "CONFIRM_USER_PASSWORD",
}


export interface emailActionInterface {
  type: InputActionType.EMAIL;
  payload: string;
}

export interface passwordActionInterface {
  type: InputActionType.PASSWORD;
  payload: string;
}

export interface inputStateInterface {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface confirmPasswordActionInterface {
  type: InputActionType.CONFIRM_PASSWORD;
  payload: string;
}

export type Action =
  | emailActionInterface
  | passwordActionInterface
  | confirmPasswordActionInterface;
