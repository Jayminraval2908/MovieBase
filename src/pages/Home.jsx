import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    const endpoint = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

    const res = await fetch(endpoint);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const handleSearch = () => {
    setQuery(searchTerm);
  };

  // 🔑 Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      {/* Search Input + Button */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}  // <-- 🔑 Support Enter key
          placeholder="Search movies..."
          className="w-full md:w-1/2 p-2 border border-gray-400 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔍 Search
        </button>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
