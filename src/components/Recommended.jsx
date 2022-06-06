import React from "react";
import Bookmark from "./Bookmark";
import { Link } from "react-router-dom";

const Recommended = ({
  img,
  date,
  type,
  rating,
  alt,
  name,
  id,
  clickFunc,
  onclick,
}) => {
  const reload = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative md:w-68 h-86 rounded-[10px] overflow-hidden ">
      <Bookmark book_id={id} onclick={onclick} />
      <Link to={`/movie_details/${id}`}>
        {" "}
        <img
          src={img}
          alt={alt}
          className="w-full h-[80%] rounded-[10px]  "
          onClick={reload}
        />
      </Link>
      <div className="w-full h-[20%]">
        <div>
          <p className="text-gray-200  ">
            <span className="font-semibold ">Release Date:</span> {date}
          </p>
          <p className="text-gray-200 my-0 ">
            {" "}
            <span className="font-semibold ">Rating:</span> {rating}
          </p>
        </div>
        <p className=" text-lg font-bold text-white w-fit ">{name}</p>
      </div>
    </div>
  );
};

export default Recommended;
