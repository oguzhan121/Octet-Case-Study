import React from 'react';
import { MoviesEntity } from '../../types';

const MovieDescContent = ({ data }: { data: MoviesEntity }) => {
  return (
    <div className="movie-desc-content">
      <span className="date">{data.country}, {data.year} </span>
      <h2 className="movie-title">{data.name}</h2>
      <div className="movie-bottom">
        <div className="movie-imdb">
          <img src="/img/imdb.svg" alt="imdb" width="35" height="17" loading="lazy" />
          <span>{data.imdb} / 100</span>
        </div>
        <span className="movie-type">{data.category}</span>
      </div>
    </div>
  )
}


export default MovieDescContent;
