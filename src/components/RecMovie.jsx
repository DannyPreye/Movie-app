import React from "react";
import Recommended from "./Recommended";
const RecMovie = ({ rec, secName }) => {
  return (
    <div className="mt-10 w-full md:w-full ">
      <h2 className="tracking-[-0.02em] font-semibold text-2xl text-white mb-4">
        {secName}
      </h2>
      <div className="w-full grid md:grid-cols-2  lg:grid-cols-4  gap-4 px-10  ">
        {rec.map((movie) => {
          return (
            <Recommended
              id={movie.id}
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              name={!movie.name ? movie.title : movie.name}
              date={
                movie.release_date ? movie.release_date : movie.first_air_date
              }
              rating={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecMovie;
