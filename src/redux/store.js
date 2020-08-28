import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { cartReducer } from "./reducer";

export default store = createStore(
  combineReducers({ cartReducer }),
  applyMiddleware(logger)
);
