import { useState, useEffect } from "react";
import SearchMovie from "../components/SearchMovie";
import Trending from "../components/Trending";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Recommended from "../components/Recommended";
import SpinLoader from "../components/SpinLoader";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const [movies, setMovie] = useState({
    image: {},
    genres: [],
  });
  const [spinLoad, setSpinLoad] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = () => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSpinLoad(true);
        setMovie(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={props.class}>
      <SearchMovie />
      <div>
        <div className=" px-4 py-2 mt-5">
          {spinLoad ? (
            <div>
              <h1 className=" text-lg md:text-2xl font-bold">
                Trending Movies
              </h1>
              <div className="w-full">
                <div className="mt-10 w-full">
                  <Splide
                    options={{
                      autoWidth: true,
                      gap: "2rem",
                      fixedWidth: "18rem",
                      type: "slide",
                      arrows: false,
                      pagination: false,
                    }}
                  >
                    {movies.slice(0, 15).map((movie) => {
                      return (
                        <Link to={`/movies/${movie.id}`}>
                          <SplideSlide key={movie.id}>
                            <Trending
                              name={movie.name}
                              img={movie.image.medium}
                              genre={movie.genres.map((genre) => genre + " ")}
                            />
                          </SplideSlide>
                        </Link>
                      );
                    })}
                  </Splide>
                </div>
              </div>
              <h1 className=" mt-10 text-lg md:text-2xl font-bold">
                Recommended for you
              </h1>
              <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16 xl:grid-cols-4 mt-8 grid-flow-row-dense  place-items-center md:place-items-start md:w-10/12 sm:gap-10 ">
                {movies.slice(16).map((movie) => {
                  return (
                    <Link to={`/movies/${movie.id}`}>
                      <Recommended
                        img={movie.image.medium}
                        name={movie.name}
                        key={movie.id}
                        genre={movie.genres.map((genre) => genre + " ")}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <SpinLoader />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
