import { BsSearch } from "react-icons/bs";

const SearchMovie = () => {
  return (
    <div className="w-full mt-10 ">
      <form className="w-full">
        <div className="flex w-full items-center gap-3 px-4 py-2 border-3 border-white">
          <label className="" htmlFor="search">
            <BsSearch size={20} />
          </label>
          <input
            type="text"
            className=" border-0 w-11/12 px-4 py-2 bg-[#150e1f]  "
            id="search"
            placeholder="Search movies and series here"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;
