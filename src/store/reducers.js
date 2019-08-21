import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import products from "./products/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    products
  });
