import { CartAction } from "../action-types/action-types";

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
  type: "SET_CART";
  payload: cartItemType;
}

export interface cartActionInterfaceDelete {
  type: "DELETE_CART";
}

export interface cartStateInterface {
  cart: cartItemType[];
}

const initialState: cartStateInterface = {
  cart: [],
};

const cartReducer = (
  state: cartStateInterface = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case "SET_CART":
      const itemExist = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (itemExist) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case "DELETE_CART":
      const newArr = state.cart.filter((item) => item._id !== action.payload);
      return {
        ...state,
        cart: newArr,
      };

    default:
      return state;
  }
};

export default cartReducer;
