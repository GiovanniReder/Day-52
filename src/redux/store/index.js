import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addFavouriteReducer from "../reducers/addFavouriteReducer";
// import removeFavouriteReducer from "../reducers/removeFavouriteReducer";
const rootReducer = combineReducers({
  favourite: addFavouriteReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
