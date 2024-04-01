import { useParams } from "react-router";
import { MoviesEntity } from "../../types";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDescContent from "../../components/MovieContent";
import StampBox from "../../components/StampBox";

type MovieDetailProps = {
  id: string;
};

const MovieDetail = () => {
  const { id } = useParams<MovieDetailProps>();
  const [movieDetail, setMovieDetail] = useState<MoviesEntity[] | any>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<MoviesEntity[]>(`http://localhost:3031/movies/${id}`);
        setMovieDetail(data);
      } catch {
        console.log("hata.");
      }
    })();
  }, []);


  return (
    <div className="movie-detail">
      <div className="container">
        <h1 className="detail-title">{movieDetail.name} </h1>
        <div className="movie-detail-wrap">
          <div className="movie-banner">
            <StampBox data={movieDetail}  />
            <img
              src="/img/movie-banner.png"
              alt="Movie Banner"
              loading="lazy"
            />
          </div>
          <div className="movie-content">
            <h2>{movieDetail.name}</h2>
          </div>
          <MovieDescContent data={movieDetail} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
