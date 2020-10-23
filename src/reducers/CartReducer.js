import { ADD_TO_CART, REMOVE_FROM_CART,FETCH_CART_ITEMS } from "../acions/types";

const initialState = {cartItems: []}
export default function (state =initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return {...state, cartItems:action.payload}
    case ADD_TO_CART:
      return { ...state, cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, cartItems: action.payload };

    default:
      return state;
  }
}