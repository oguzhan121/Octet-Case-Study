import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { orderMovies, setFilteredMovies } from "../../actions/movies";

import cc from "classcat";

interface ListItem {
  id: number;
  name: string;
}

interface FilterItemProps {
  list: ListItem[];
  onClick: () => void;
  isActive: boolean;
  title: string;
}

function FilterItem({ list, onClick, isActive, title }: FilterItemProps) {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const movies = useSelector((state: any) => state.movies.movies);
  const favorites = useSelector((state: any) => state.favorites);
  const filteredMovies = useSelector((state: any) => state.movies.filteredMovies)

  const dispatch = useDispatch();

  const selectFilter = (filterId: number) => {
    selectedFilter === filterId ? setSelectedFilter(null) :    setSelectedFilter(filterId);
   
    if (filterId === 4) {
      if(selectedFilter === 4) {
        dispatch(setFilteredMovies([]));
        return
      }
      const favoritesMovies = movies.filter((movie: any) =>
        favorites.includes(movie.id)
      );
      dispatch(setFilteredMovies(favoritesMovies));
    } else {
      dispatch(orderMovies(movies, filteredMovies, filterId))
    }
  };

  return (
    <li onClick={onClick}>
      {title}
      <img src="img/switch-icon-order.png" />
      {isActive && (
        <ul className="filter-sub">
          {list.map((item) => (
            <li
              className={cc({ active: item.id === selectedFilter })}
              onClick={() => {
                selectFilter(item.id);
              }}
              key={item.id.toString()}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default FilterItem;
