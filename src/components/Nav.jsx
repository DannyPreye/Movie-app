import React from "react";
import { BsGridFill, BsLaptop } from "react-icons/bs";
import { MdMovie, MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaBookmark } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="md:h-screen md:w-fit container mx-auto md:mx-0  z-10">
      <div className=" md:h-[95%] m-2 rounded-[10px] bg-[#161d2f]    ">
        <div className="h-fit flex justify-between px-4 py-2 md:flex md:flex-col md:items-center md:gap-10 md:w-10 ">
          <div className="text-[red] text-2xl">
            <Link to={"/"}>
              <MdMovie />
            </Link>
          </div>
          <div className="flex  md:grid gap-2  text-2xl text-white">
            <BsGridFill />
            <MdLocalMovies />
            <BsLaptop />
            <FaBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
