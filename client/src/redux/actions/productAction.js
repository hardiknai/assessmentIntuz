import axios from "axios";

import { GET_PRODUCTS, PRODUCT_LOADING, GET_PRODUCTS_ERROR } from "../types";


// Get all products
export const getProducts = () => (dispatch) => {
  dispatch(setProductLoading());
  axios
    .get("/api/product")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: err.data,
      })
    );
};

// Product loading
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

export const getProduct = (state, props) => {
  return state.products.find((item) => item.id === props.id);
};
