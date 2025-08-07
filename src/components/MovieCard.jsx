import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {

  const imgBase="https://image.tmdb.org/t/p/w400"
  return (
    <div className='bg-black shadow-lg rounded p-2 hover:scale-110 transition-all'>
      <Link to={`/movie/${movie.id}`}>
      <img src={imgBase + movie.poster_path} alt={movie.title} className='rounded'/>
      <h2 className='text-xl font-semibold mt-2 text-white'>{movie.title}</h2>
      <p>⭐{movie.vote_average}</p>
      </Link>
    </div>
    
  )
}

export default MovieCard