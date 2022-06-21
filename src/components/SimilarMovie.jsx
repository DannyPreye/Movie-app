import React from "react";
import RecMovie from "./RecMovie";

const SimilarMovie = ({ movies, type }) => {
  return (
    <div className="mt-10">
      <RecMovie secName="Similar Movies" rec={movies} type={type} />
    </div>
  );
};

export default SimilarMovie;
