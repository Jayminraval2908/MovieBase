import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center'>
        <h1 className='text-7xl font-extrabold p-5'>
            <Link to="/">MovieBase</Link>
        </h1>
        <div className='space-x-4'>
            <Link to="/" className='hover:text-blue-500 pr-10 font-bold text-2xl'>Home</Link>
            <Link to="/watchlist" className='hover:text-blue-500 pr-10 font-bold text-2xl'>Watchlist</Link>
        </div>

    </nav>
  )
}

export default Navbar