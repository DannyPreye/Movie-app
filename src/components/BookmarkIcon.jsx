import { BsFillBookmarkFill } from "react-icons/bs";
const BookmarkIcon = () => {
  return (
    <div className="absolute w-8 h-8 z-50 rounded-full hover:bg-[#110c1f67] hover:text-[#ecebec] right-4 top-4 text-[#0f0418] bg-[#fcfcfcab] grid place-items-center">
      <BsFillBookmarkFill size={13} />
    </div>
  );
};

export default BookmarkIcon;
