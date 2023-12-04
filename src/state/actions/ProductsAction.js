import { GET_PRODUCTS_ENDPOINT } from "../endpoints";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../types";

const getProductsAction = () => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS });

    fetch(GET_PRODUCTS_ENDPOINT)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: error.message,
        })
      );
  };
};

export { getProductsAction };
