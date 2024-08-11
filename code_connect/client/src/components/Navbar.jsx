import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import Auth from '../utils/auth'


const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className='navbar'>
         <div className='navbar-left'>

            <Link to="/" className='navbar-brand'> Code Connect</Link>
        </div>
        <div className='right-navbar'>
        {Auth.loggedIn() ? (
           <div>
            <Link to="/profile" className='navbar-link'>Profile</Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className='navbar-link'>Login</Link>
            <Link to="/addprofile" className='navbar-link'>Add Profile</Link>
          </div>
        )}
        </div>
    </nav>
   
  )
}

export default Navbar