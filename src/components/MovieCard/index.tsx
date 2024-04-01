import { MoviesEntity } from "../../types";
import MovieDescContent from "../MovieContent";
import { useNavigate } from "react-router-dom";
import StampBox from "../StampBox";

const MovieCard = ({
  data,
}: {
  data: MoviesEntity;
  isFavorite: boolean;
}) => {
  const navigate = useNavigate();

  const navigator = (id: string) => {
    navigate("/detail/" + id);
  };

  return (
    <div className="movie-item">
      <StampBox data={data} />
      <div className="movie-inner" onClick={() => navigator(data.id)}>
        <div className="movie-img-area">
          <img
            src={data.poster}
            width="250"
            height="370"
            loading="lazy"
            alt="Movie resim 1"
          />
        </div>
      </div>
      <MovieDescContent data={data} />
    </div>
  );
};

export default MovieCard;
