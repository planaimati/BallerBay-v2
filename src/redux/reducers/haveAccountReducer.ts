export interface userHaveAccountAction {
  type: "SET_USER_HAVE_ACCOUNT";
}

export interface haveAccountState {
  haveAccount: boolean;
}

const initialState = {
  haveAccount: true,
};

const haveAccountReducer = (
  state: haveAccountState = initialState,
  action: userHaveAccountAction
) => {
  switch (action.type) {
    case "SET_USER_HAVE_ACCOUNT": {
      console.log(state.haveAccount);
      const newState = !state.haveAccount;
      return {
        ...state,
        haveAccount: newState,
      };
    }
    default: {
      return state;
    }
  }
};

export default haveAccountReducer;
