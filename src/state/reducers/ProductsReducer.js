import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../types/index";

const initialState = {
  products: [],
  loading: false,
  error: false,
  errorMessage: "",
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        products: action.payload,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
