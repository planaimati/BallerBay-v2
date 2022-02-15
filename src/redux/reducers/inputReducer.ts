import { InputActionType, Action, inputStateInterface } from "../action-types";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const inputReducer = (
  state: inputStateInterface = initialState,
  action: Action
) => {
  switch (action.type) {
    case InputActionType.EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case InputActionType.PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case InputActionType.CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};

export default inputReducer;
