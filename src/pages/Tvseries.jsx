import React, { useState, useEffect } from "react";

import Display from "../Components/Display";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

const Tvseries = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [trending, settrending] = useState([]);
  const [recommended, setrecommended] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const trendingFetch = fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const recommendedFetch = fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );

    Promise.all([trendingFetch, recommendedFetch])
      .then(async ([aa, bb]) => {
        const a = await aa.json();
        const b = await bb.json();
        return [a, b];
      })
      .then((data) => {
        settrending(data[0].results);
        setrecommended(data[1].results);
        setloading(true);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={`flex-1 py-4 px-5 ${!loading ? "h-screen" : ""}`}>
      {loading ? (
        errorMessage ? (
          <Error error={errorMessage} />
        ) : (
          <Display movies={trending} rec={recommended} type="tv" />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Tvseries;
