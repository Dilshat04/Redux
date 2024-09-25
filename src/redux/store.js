import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 
const initialState = {
    products: [],
    basketProducts: JSON.parse(localStorage.getItem("cart")) || [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.products };
        case "SET_PRODUCT_TO_BASKET":
            let addToLocalStorage = [...state.basketProducts, action.product] 
            localStorage.setItem("cart",JSON.stringify(addToLocalStorage))
            return { ...state, basketProducts: addToLocalStorage };
        case "DELETE_PRODUCT":
            let filteredBasket = state.basketProducts.filter((product) => product.id!==action.id)
            localStorage.setItem("cart",JSON.stringify(filteredBasket))
            return { ...state, basketProducts: filteredBasket };
        default:
            return state;
    }
};

export const store = createStore(shopReducer, applyMiddleware(thunk));
