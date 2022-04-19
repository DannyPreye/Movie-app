import BookmarkIcon from "./BookmarkIcon";
const Recommended = (props) => {
  return (
    <div className="w-64 h-78 rounded-md relative overflow-hidden shadow ">
      <BookmarkIcon />
      <img
        src={props.img}
        alt={props.alt}
        className="w-full h-40 left-0 top-0 -z-10"
      />
      <div>
        <div className="flex gap-2 items-center">
          <p>{props.genre}</p>
          <p>{props.date}</p>
        </div>
        <h4 className="text-xl font-bold">{props.name}</h4>
      </div>
    </div>
  );
};

export default Recommended;
