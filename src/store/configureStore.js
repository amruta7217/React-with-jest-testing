import { createStore, applyMiddleware, compose } from "redux";
import createDebounce from "redux-debounced";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {
  loadState,
  saveState,
  deleteState,
} from "../infrastructure/middleware/storage/reduxLocalStorage";

import debounce from "lodash/debounce";

const debounceTimeout = 900000; // 15 min -- 30000; // 30 sec

const middlewares = [thunk, createDebounce()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let persistedState = loadState({});
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(
  debounce(() => {
    deleteState();
    console.log("Storage deleted");
  }, debounceTimeout)
);

store.subscribe(() => {
  const state = store.getState();
  // We should not persist router state
  const { router, ...stateToPersist } = state;
  saveState(stateToPersist);
});
