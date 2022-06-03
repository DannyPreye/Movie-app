import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecMovie from "../Components/RecMovie";

const SearchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  let { query } = useParams();

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(true);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <RecMovie secName={`Result for "${query}"`} rec={movies} />
    </>
  );
};

export default SearchedMovies;
