import { combineReducers } from "redux";
import { ProductsReducer } from "../reducers/ProductsReducer";

export const rootReducer = combineReducers({
  Products: ProductsReducer,
});
