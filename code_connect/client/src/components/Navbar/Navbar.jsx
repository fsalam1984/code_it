import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar'
import auth from '../../utils/auth'

const Navbar = () => {

  return (
    <nav className='navbar '>
      <div className='navbar-left'>

        <Link to="/" className='navbar-brand'> Code Connect</Link>

      </div>
      <SearchBar />
      <div className='right-navbar'>
        {auth.loggedIn() ? (
          <>
            <Link to="/profile" className='navbar-link'>Profile</Link>

            <Link to="/addprofile" className='navbar-link'>Manage Profile</Link>
            <button onClick={auth.logout}>logout</button>
          </>
        ) : (

          <Link to="/login" className='navbar-link'>Login</Link>
        )}





      </div>
    </nav>
  );
}

export default Navbar;
