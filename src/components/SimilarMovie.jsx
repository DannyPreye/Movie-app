import React from "react";
import RecMovie from "./RecMovie";

const SimilarMovie = ({ movies }) => {
  return (
    <div className="mt-10">
      <RecMovie secName="Similar Movies" rec={movies} />
    </div>
  );
};

export default SimilarMovie;
