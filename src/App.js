
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Nav from './Components/Nav'
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import SearchedMovies from "./Pages/SearchedMovies"




const App = () => {


  return (

    <Router>
      <div className='md:flex'>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie_details/:id" element={<MovieDetails />} />
          <Route path="/Movie-app" element={<HomePage />} />
          <Route path="/search/:query" element={<SearchedMovies />} />


        </Routes>
      </div>
    </Router>

  )
}

export default App