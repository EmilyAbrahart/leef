import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import plantReducer from "./reducers/plantReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  plantState: plantReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
