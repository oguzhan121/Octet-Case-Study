import axios from "axios";
import { useEffect } from "react";
import { ChangeEvent, FormEvent, useState } from "react";

import { MoviesEntity } from "../../types";
import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";
import MovieFilter from "../../components/MovieFilter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  searchMovies,
  setMovies,
} from "../../actions/movies";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [listMovies, setListMovies] = useState<MoviesEntity[]>([]);
  const favorites: string[] = useSelector((state: any) => state.favorites);
  const movies: MoviesEntity[] = useSelector(
    (state: any) => state.movies.movies
  );
  const filteredMovies: MoviesEntity[] = useSelector(
    (state: any) => state.movies.filteredMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<MoviesEntity[]>(
          "http://localhost:3031/movies"
        );
        dispatch(setMovies(data));
      } catch {
        console.log("hata.");
      }
    })();
  }, []);

  useEffect(() => {
    if (filteredMovies.length >= 1) {
      setListMovies(filteredMovies);
    } else {
      setListMovies(movies);
    }
  }, [movies, filteredMovies]);

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      searchMovies(movies, search)
    );

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search onChange={searchChange} />
      </form>
      <MovieFilter />
      <div className="container">
        <div className="movies-list">
          {listMovies?.map((item: any) => (
            <MovieCard
              key={item.id}
              data={item}
              isFavorite={favorites.includes(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
