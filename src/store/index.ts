import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(reducers);
