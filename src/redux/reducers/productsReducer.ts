export type productsPayloadType = {
  _id: string;
  productName: string;
  productPrice: string;
  productBrand: string;
  productAmount: string;
  productDesc: string;
  productImage: string;
  productSize: string;
};

export interface productsActionInterface {
  type: "SET_PRODUCTS";
  payload: productsPayloadType[];
}

export interface productsStateInterface {
  products: productsPayloadType[];
}

const initialState: productsStateInterface = {
  products: [],
};

const productsReducer = (
  state: productsStateInterface = initialState,
  action: productsActionInterface
) => {
  switch (action.type) {
    case "SET_PRODUCTS":

    
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
