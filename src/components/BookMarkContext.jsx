import { createContext, useState, useEffect } from "react";

const BookContext = createContext();

export function BookmarkProvider({ children }) {
  // Fetch data for all movies
  const [trending, settrending] = useState([]);
  const [recommended, setrecommended] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // Use effect
  useEffect(() => {
    const trendingFetch = fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const recommendedFetch = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );

    Promise.all([trendingFetch, recommendedFetch])
      .then(async ([aa, bb]) => {
        const a = await aa.json();
        const b = await bb.json();
        return [a, b];
      })
      .then((data) => {
        settrending(data[0].results);
        setrecommended(data[1].results);
        setloading(true);
      })
      .catch((err) => {});
  }, []);

  const [movies, setItem] = useState([]);

  const addBookMark = (movie) => {
    setItem((prevState) => [...new Set([...prevState, movie])]);
  };

  return (
    <BookContext.Provider
      value={{
        movies,
        addBookMark,
        trending,
        recommended,
        loading,
        errorMessage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
export default BookContext;
