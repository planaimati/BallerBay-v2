//INPUT

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

//CART

export enum CartActionType {
  SET = "SET_CART",
  DELETE = "DELETE_CART",
}

export type cartItemType = {
  _id: string;
  productName: string;
  productPrice: string;
  productBrand: string;
  productAmount: string;
  productDesc: string;
  productImage: string;
  productSize: string;
};

export interface cartActionInterface {
  type: CartActionType.SET;
  payload: cartItemType;
}

export interface cartActionInterfaceDelete {
  type: CartActionType.DELETE;
  payload: string;
}

export type CartAction = cartActionInterface | cartActionInterfaceDelete;

//USER

export enum UserActionType {
  SET_USER = "SET_USER",
  DELETE_USER = "DELETE_USER",
}

export type userPayloadType = {
  admin: boolean;
  email: string;
  password: string;
};

export interface setUserActionInterface {
  type: UserActionType.SET_USER;
  payload: userPayloadType;
}

export interface deleteUserActionInterface {
  type: UserActionType.DELETE_USER;
}

export interface userState {
  admin: boolean;
}

export type UserAction = setUserActionInterface | deleteUserActionInterface;
