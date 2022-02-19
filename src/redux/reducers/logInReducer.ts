export interface logInAction {
  type: "SET_LOG_IN";
  payload: boolean;
}

export interface logInState {
  logedIn: boolean;
  admin: boolean;
}

const initialState = {
  logedIn: false,
  admin: false,
};

const logInReducer = (state = initialState, action: logInAction) => {
  switch (action.type) {
    case "SET_LOG_IN":
      return {
        state,
        logedIn: action.payload,
      };

    default:
      return state;
  }
};

export default logInReducer;
