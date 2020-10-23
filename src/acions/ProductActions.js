import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE,ORDER_PRODUCTS_BY_PRICE } from "./types"
import store from '../store'

export const fetchProducts = () => (dispatch) => {
    fetch('http://localhost:8000/products')
          .then(response => response.json())
          .then((data) => {
            dispatch({type: FETCH_PRODUCTS, payload: data})
        })
}

export const filterProductsBySize = (size, products) => (dispatch) => {
    dispatch({type: FILTER_PRODUCTS_BY_SIZE, payload: {size: size, items: size===''?products:products.filter((x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0)}})
}

export const sortItems = (sort, products) => (dispatch) => {

    if(sort !== ''){
        products.sort((a, b) =>
            sort === "lowest"
            ? a.price > b.price
            : a.price < b.price
        )
    }else{
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
          sort: sort,
          items: products,
        }
      })
}