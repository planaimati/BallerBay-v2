import { UserAction, UserActionType } from "../action-types/action-types";


export interface userState {
  admin: boolean;
}

const initialState = {
  admin: false,
};

const userReducer = (
  state: userState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return {
        ...state,
        admin: action.payload.admin,
      };

    case UserActionType.DELETE_USER:

    return{
      ...state,
      admin: false
    }

    
    default:
      return state;
  }
};

export default userReducer;
