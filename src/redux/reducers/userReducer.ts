export type payloadType = {
  admin: boolean;
  email: string;
  password: string;
}

export interface userActionInterface {
  type: "SET_USER";
  payload: payloadType
}



export interface userState {
  admin: boolean;
}

const initialState = {
  admin: false,
};

const userReducer = (
  state: userState = initialState,
  action: userActionInterface
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        admin: action.payload.admin,
      };
    default:
      return state;
  }
};

export default userReducer;
