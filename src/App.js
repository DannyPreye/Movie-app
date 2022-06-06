
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Nav from './Components/Nav'
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import SearchedMovies from "./Pages/SearchedMovies"
import { BookmarkProvider } from "./Components/BookMarkContext"
import BookMarkPage from "./Pages/BookMarkPage"


const App = () => {


  return (
    <BookmarkProvider>
      <Router>

        <div className='md:flex'>

          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie_details/:id" element={<MovieDetails />} />
            <Route path="/Movie-app" element={<HomePage />} />
            <Route path="/search/:query" element={<SearchedMovies />} />
            <Route path="/bookmark" element={<BookMarkPage />} />
          </Routes>

        </div>

      </Router>
    </BookmarkProvider>

  )
}

export default App