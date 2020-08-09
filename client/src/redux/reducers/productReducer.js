import { GET_PRODUCTS, PRODUCT_LOADING, GET_PRODUCTS_ERROR } from "../types";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
