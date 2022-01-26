import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./reducers/search.reducer";
import { loadingReducer } from "./reducers/loading.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  loader: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
