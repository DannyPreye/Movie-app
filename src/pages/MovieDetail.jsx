import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
const MovieDetail = () => {
  const [movie, setMovie] = useState({
    image: {},
    genres: [],
  });

  let { id } = useParams();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  };
  return (
    <div>
      <Movie img={movie.image.original} summary={movie.summary} />
    </div>
  );
};

export default MovieDetail;
