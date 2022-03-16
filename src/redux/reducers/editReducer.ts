export type editPayloadType = {
  _id?: string;
  productName?: string;
  productPrice?: string;
  productBrand?: string;
  productAmount?: string;
  productDesc?: string;
  productImage?: string;
  productSize?: string;
};

export interface editActionInterface {
  type: "SET_EDIT";
  payload: editPayloadType;
}

export interface editStateInterface {
  product: editPayloadType;
  edit: boolean;
}

const initialState: editStateInterface = {
  product: {},
  edit: false,
};

const editReducer = (
  state: editStateInterface = initialState,
  action: editActionInterface
) => {
  switch (action.type) {
    case "SET_EDIT":
      console.log(state.product, state.edit);

      return {
        ...state,
        product: action.payload,
        edit: !state.edit,
      };

    default:
      return state;
  }
};

export default editReducer;
