import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Trending from "../Components/Trending";

const SliderTrending = ({ movies }) => {
  return (
    <Splide
      options={{
        pagination: false,
        perPage: 3,
        perMove: 1,
        gap: "1.2rem",
        autoWidth: true,
        breakpoints: {
          640: {
            perPage: 1,
            gap: "2rem",
          },
          1040: {
            perPage: 2,
            gap: "2rem",
            autoWidth: true,
          },
        },
      }}
    >
      {movies.map((movie) => {
        return (
          <SplideSlide key={movie.id}>
            <Trending
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              name={!movie.name ? movie.title : movie.name}
              id={movie.id}
              date={
                movie.release_date ? movie.release_date : movie.first_air_date
              }
              rating={movie.vote_average}
              type={movie.media_type}
            />
            ;
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default SliderTrending;
