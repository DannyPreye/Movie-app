import React from "react";
import BookContext from "../Components/BookMarkContext";
import { useContext } from "react";
import RecMovie from "../Components/RecMovie";

const BookMarkPage = () => {
  let { movies } = useContext(BookContext);
  console.log(movies);
  return (
    <div>
      <RecMovie secName="Book Marked Movies" rec={movies} />;
    </div>
  );
};

export default BookMarkPage;
