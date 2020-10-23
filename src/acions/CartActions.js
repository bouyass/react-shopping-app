import { ADD_TO_CART, REMOVE_FROM_CART,FETCH_CART_ITEMS } from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (product, items) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};


export const increaseQuantity= (product, items) => (dispatch) => {
    const cartItems = items.slice()
    cartItems.forEach(item => {
      if(item.id === product.id){
        item.count +=1
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
}
export const reduceQuantity = (product, items) => (dispatch) => {
  const cartItems = items.slice()
  cartItems.forEach((item, index) => {
    if(item.id === product.id){
       if(item.count > 0){
         item.count -= 1
         if(item.count === 0){
            cartItems.splice(index,1)
         }
        }
    }
  })
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
}

export const fetchCartItems = () => (dispatch) => {
  if(localStorage.getItem('cartItems').length >0){
    dispatch({type: FETCH_CART_ITEMS, payload: JSON.parse(localStorage.getItem('cartItems'))})
  }
}