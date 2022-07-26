import React from 'react'
import {Link} from 'react-router-dom'

const Navber = () => {
  return (
    <nav>
        <Link to="/" className='nav-link'>Home Page</Link>
        <Link to="/show-book" className='nav-link'>Show-Books</Link>
        <Link to="/add-book" className='nav-link'>Add-Book</Link>
    </nav>
  )
}

export default Navber