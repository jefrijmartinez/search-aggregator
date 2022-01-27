import { loadingReducer } from "../store/reducers/loading.reducer";
import { searchReducer } from "../store/reducers/search.reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({
  search: searchReducer,
  loader: loadingReducer,
});

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
