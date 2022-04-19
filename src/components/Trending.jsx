import BookmarkIcon from "./BookmarkIcon";
const Trending = (props) => {
  return (
    <div className="md:w-62 w-52 h-60  rounded-md relative overflow-hidden shadow ">
      <BookmarkIcon />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#130120b4] to-[#09001ac9] "></div>
      <img
        src={props.img}
        alt={props.alt}
        className="absolute w-full h-full left-0 top-0 -z-10"
      />
      <div className="absolute bottom-4 left-4">
        <div className="flex gap-2 text-sm ">
          <p>{props.genre} </p>
          <p>{props.date}</p>
        </div>
        <h4 className="text-xl font-bold">{props.name}</h4>
      </div>
    </div>
  );
};

export default Trending;
