import { combineReducers } from "redux";
import * as Account from "./componentStores/Account";
import * as Product from "./componentStores/Product";

const rootReducer = combineReducers({
  account: Account.reducer,
  carts: Product.reducer,
});

export default rootReducer;
