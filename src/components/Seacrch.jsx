import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Seacrch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <div className="w-full flex gap-2 items-center  text-white">
      <BsSearch />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for movies or series"
          className="bg-[#10141f] px-4 py-1 w-60 focus:outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Seacrch;
