import { MoviesEntity } from "../types";

export const setMovies = (movies: MoviesEntity[]) => {
  return {
    type: "SET_MOVIES",
    payload: movies,
  };
};

export const setFilteredMovies = (movies: MoviesEntity[]) => {
  return {
    type: "SET_FILTERED_MOVIES",
    payload: movies,
  };
};

export const searchMovies = (movies: MoviesEntity[], search: string) => {
  const searchingMovies = movies.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  return {
    type: "SET_FILTERED_MOVIES",
    payload: searchingMovies,
  };
};

export const orderMovies = (
  movies: MoviesEntity[],
  filteredMovies: MoviesEntity[],
  orderType: number
) => {
  const data = filteredMovies.length >= 1 ? filteredMovies : movies;
  const payloadName: "SET_FILTERED_MOVIES" | "SET_MOVIES" = filteredMovies.length >= 1 ? "SET_FILTERED_MOVIES" : "SET_MOVIES";
  if (orderType === 1) {
    data.sort((n1: any, n2: any) => n1.name < n2.name ? -1 : n1.name > n2.name ? 1 : 0 );
    return {
      type: payloadName,
      payload: data,
    };
  } else if (orderType === 2) {
    data.sort((y1: any, y2: any) => y1.year < y2.year ? -1 : y1.year > y2.year ? 1 : 0 );
    return {
      type: payloadName,
      payload: data,
    };
  } else if (orderType === 3) {
    data.sort((im1: any, im2: any) => im1.imdb < im2.imdb ? -1 : im1.imdb > im2.imdb ? 1 : 0 );
    return {
      type: payloadName,
      payload: data,
    };
  }
  else {
    return {
      type: "SET_FILTERED_MOVIES",
      payload: [],
    };
  }
};
