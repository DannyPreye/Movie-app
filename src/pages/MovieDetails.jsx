import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import SimilarMovie from "../Components/SimilarMovie";
import Error from "../Components/Error";
import Reviews from "../Components/Reviews";

const MovieDetails = () => {
  const [movie, setmovie] = useState({
    genres: [],
  });
  const [loading, setloading] = useState(false);
  const [similar, setsimilar] = useState([]);
  const [reviews, setreviews] = useState([]);
  const [errorMessage, setError] = useState();
  const [video, setVideo] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetchMovie();
    fetchSimilar();
    fetchReview();
    fetchVideo();
  }, [id]);

  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw "No information for this movie yet";
        }
      })
      .then((data) => {
        setloading(true);
        setmovie(data);
      })
      .catch((error) => {
        setloading(true);
        setError(error);
      });
  };
  const fetchSimilar = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setsimilar(data.results);
      });
  };

  const fetchReview = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setreviews(data.results);
      });
  };
  const fetchVideo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data.results[0]);
      });
  };
  const reload = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`flex-1 py-4 px-5 ${!loading ? "h-screen" : ""}`}>
      {loading ? (
        errorMessage ? (
          <Error error={errorMessage} />
        ) : (
          <section className="text-gray-300 body-font overflow-hidden ">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 md:w-full lg:h-fit w-[200px] h-1/2 md:object-cover object-center rounded"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-300 tracking-widest">
                    {" "}
                    Movie Name
                  </h2>
                  <h1 className="text-gray-200 text-3xl title-font font-medium mb-1">
                    {!movie.name ? movie.title : movie.name}
                  </h1>

                  <p className="leading-relaxed">{movie.overview}.</p>
                  <div className="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3 font-bold">Genre:</span>
                      <div className="flex gap-2 italic">
                        {movie.genres.map((genre) => {
                          return <p key={genre.id}> {genre.name}</p>;
                        })}
                      </div>
                    </div>
                    <div className="flex md:ml-6 items-center">
                      <span className="mr-3 font-bold">Rating:</span>
                      <p className="italic">{movie.vote_average}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-300">
                      Watch Trailer
                    </span>
                    {video ? (
                      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.key}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Video
                        </a>
                      </button>
                    ) : (
                      "no video available"
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Reviews reviews={reviews} />

            <SimilarMovie movies={similar} clickFunc={reload} />
          </section>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetails;
