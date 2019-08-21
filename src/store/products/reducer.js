import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED
} from "./types";
const initialState = {
  products: [],
  fetchingProducts: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        fetchingProducts: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        fetchingProducts: false
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        fetchingProducts: false
      };
    default:
      return state;
  }
};
