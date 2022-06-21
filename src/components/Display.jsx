import React from "react";
import Seacrch from "../Components/Seacrch";
import SliderTrending from "./SliderTrending";
import Recommended from "../Components/Recommended";

import "@splidejs/react-splide/css";
import RecMovie from "./RecMovie";

const Display = ({ movies, rec, type }) => {
  return (
    <div className="container mx-auto my-10 px-4 flex-1 ">
      <Seacrch />
      {/* ********************** Trending movies ************************* */}
      <div className="mt-10 w-full md:w-full ">
        <h2 className="tracking-[-0.02em] font-semibold text-2xl text-white mb-4">
          Trending
        </h2>
        <SliderTrending movies={movies} />
      </div>
      {/* ********************** Recommended movies ************************* */}
      <RecMovie rec={rec} secName={"Recommended"} type={type} />
    </div>
  );
};

export default Display;
