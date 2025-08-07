import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-extrabold">
          <Link to="/">MovieBase</Link>
        </h1>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        
        <div className="hidden md:flex space-x-6 text-2xl font-bold">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/watchlist" className="hover:text-blue-500">Watchlist</Link>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-xl font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/watchlist" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Watchlist</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

