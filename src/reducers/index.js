import { combineReducers } from "redux";
import productReducers from "./ProductReducer";
import cartReducers from "./CartReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
});