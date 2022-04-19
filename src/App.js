
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import BookmarkPage from "./pages/BookmarkPage";
import MovieDetail from "./pages/MovieDetail";
import CastPage from "./pages/CastPage";


function App() {
  return (
    <div className=" text-[#a5a3a3] h-screen w-screen  overflow-x-hidden flex md:flex-row gap-4 flex-col">
      <Nav />
      <div className="flex-1 md:w-3/4 w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/cast" element={<CastPage />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}


export default App;
