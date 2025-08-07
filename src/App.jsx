import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Watchlist from "./pages/Watchlist"
import { Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<MovieDetail/>} />
      <Route path="/watchlist" element={<Watchlist/>} />
    </Routes>

    </>
  )
}

export default App
