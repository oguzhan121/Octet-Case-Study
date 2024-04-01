import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  movies: moviesReducer
})

export default rootReducer