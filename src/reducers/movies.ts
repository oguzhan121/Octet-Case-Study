import { MoviesEntity } from "../types";

interface MoviesStateProps {
  movies: MoviesEntity[];
  filteredMovies: MoviesEntity[];
}

const defaultState = {
  movies: [],
  filteredMovies: [],
};

const moviesReducer = (state: MoviesStateProps = defaultState, action: any) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: [...action.payload],
      };
    case "SET_FILTERED_MOVIES":
      return {
        ...state,
        filteredMovies: [...action.payload],
      };
    default:
      return state;
  }
};

export default moviesReducer;
