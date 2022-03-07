export interface messageActionInterface {
  type: "SET_MESSAGE";
  payload: string;
}

const initialState = {
  message: "Wprowadź dane",
};

const messageReducer = (
  state = initialState,
  action: messageActionInterface
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default messageReducer;
