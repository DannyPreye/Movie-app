import { createContext, useState } from "react";

const BookContext = createContext();

export function BookmarkProvider({ children }) {
  const [movies, setItem] = useState([]);

  const addBookMark = (movie) => {
    setItem((prevState) => [...prevState, movie]);
  };

  return (
    <BookContext.Provider value={{ movies, addBookMark }}>
      {children}
    </BookContext.Provider>
  );
}
export default BookContext;
