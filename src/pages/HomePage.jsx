import Display from "../Components/Display";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

import { useState, useEffect, useContext } from "react";
import BookContext from "../Components/BookMarkContext";

// ************************** MAIN COMPONENT ***********************
const HomePage = () => {
  const { trending, recommended, loading, errorMessage } =
    useContext(BookContext);

  return (
    <div className={`flex-1 py-4 px-5 ${!loading ? "h-screen" : ""}`}>
      {loading ? (
        errorMessage ? (
          <Error error={errorMessage} />
        ) : (
          <Display movies={trending} rec={recommended} type="movie" />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePage;
