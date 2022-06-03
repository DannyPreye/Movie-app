import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";

const Bookmark = () => {
  return (
    <div
      role="button"
      className="w-10 h-10 grid place-items-center bg-[#313131] text-white hover:text-gray-800 rounded-full hover:bg-[#f1f0f1] hover:bg-[#313131]] absolute top-2 right-2 z-[2000]"
    >
      <BsBookmarkPlus className="rotate-[45deg]" />
    </div>
  );
};

export default Bookmark;
