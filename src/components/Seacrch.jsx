import { BsSearch } from "react-icons/bs";

const Seacrch = () => {
  const getSearch = (e) => {
    const userValue = e.target.value;
    console.log(userValue);
  };
  return (
    <div className="w-full flex gap-2 items-center  text-white">
      <BsSearch />
      <input
        type="text"
        placeholder="Search for movies or series"
        className="bg-[#10141f] px-4 py-1 w-60 focus:outline-none"
        onChange={getSearch}
      />
    </div>
  );
};

export default Seacrch;
