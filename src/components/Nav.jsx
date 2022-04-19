import { BiMoviePlay } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdMovieFilter } from "react-icons/md";

const Nav = (props) => {
  return (
    <header className="flex  flex-row md:flex-col items-center md:w-[4rem] md:h-screen h-[5rem] justify-between w-full mx-auto md:mx-0 px-2 md:px-6 py-4 rounded-b-2xl shadow-sm md:mt-0 bg-[#211531]">
      <div className="flex md:block items-center gap-4  ">
        <BiMoviePlay size={25} />
      </div>
      <div className="flex md:flex-col  gap-3">
        <BsFillBookmarkCheckFill size={22} />
        <MdMovieFilter size={22} />
      </div>
      <div className="w-12 h-12 bg-white rounded-full grid place-items-center">
        <img src={props.img} alt={props.alt} className="w-11/12 h-11/12" />
      </div>
    </header>
  );
};

export default Nav;
