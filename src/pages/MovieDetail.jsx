import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const {id}=useParams();
  const [movie,setMovie]=useState(null);

  const fetchMoviesDetails = async()=>{
    const res= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    const data= await res.json();
    setMovie(data);

  }

  useEffect(()=>{
    fetchMoviesDetails();
  },[id])

  if(!movie) return <p className='text-center mt-10'>Loading...</p>;

  const addToWatchlist = (movie)=>{
    const storedList= JSON.parse(localStorage.getItem("watchlist")) || [];
    const exists= storedList.find(m=>m.id === movie.id)
    if (!exists) {
      const updatedList=[...storedList, movie];
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
      alert("Added to watchlist!");

    }
    else{
      alert("Already in watchlist.")
    }

  }

  return (
    <div className='p-8 bg-gray-900 text-white min-h-screen'>
      <div className='flex flex-col md:flex-row items-start gap-8'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded w-full md:w-1/3"/>
          <div>
            <h1 className='text-3xl font-extrabold mb-2'>{movie.title}</h1>
            <p className='text-gray-400 mb-4'>{movie.overview}</p>
            <p><strong>Genres:</strong>{movie.genres.map(g=> g.name).join(', ')}</p>
            <p><strong>Release Date:</strong>{movie.release_date}</p>
            <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          </div>
      </div>
      <button
  onClick={() => addToWatchlist(movie)}
  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
>
  ➕ Add to Watchlist
</button>

    </div>
  )
}

export default MovieDetail