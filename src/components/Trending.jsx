import React from "react";
import Bookmark from "./Bookmark";
import { Link } from "react-router-dom";

const Trending = ({ img, date, type, rating, alt, name, id }) => {
  return (
    <div className="relative w-64  h-72 rounded-[10px] overflow-hidden flex-shrink-0">
      <Bookmark />
      <Link to={`/movie_details/${id}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0000009c] to-[#22222291] z-[100]"></div>
      </Link>
      <img
        src={img}
        alt={alt}
        className="w-full h-full absolute top-0 left-0"
      />
      <div className="absolute left-[50%] translate-x-[-50%] bottom-5 z-[1000] w-[90%]">
        <div>
          <p className="text-gray-200  ">
            <span className="font-semibold ">Release Date:</span> {date}
          </p>
          <p className="text-gray-200  ">
            {" "}
            <span className="font-semibold ">Rating:</span> {rating}
          </p>
        </div>
        <p className=" text-lg font-bold text-white w-fit ">{name}</p>
      </div>
    </div>
  );
};

export default Trending;
