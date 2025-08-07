import React from 'react'
import { useState,useEffect } from 'react'
import MovieCard from '../components/MovieCard'

function Watchlist() {

  const [watchlist, setWatchlist]= useState([]);

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored);
  },[])

  const removeFromWatchlist =(id)=>{
    const update=watchlist.filter(movie=>movie.id !== id);
    setWatchlist(update);
    localStorage.setItem("watchlist",JSON.stringify(update))
  }
  return (
        <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">🎞 Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {watchlist.map(movie => (
            <div key={movie.id} className="relative">
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFromWatchlist(movie.id)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-2"
              >
                ❌Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist