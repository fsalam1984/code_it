import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
         <div className='navbar-left'>

            <Link to="/" className='navbar-brand'> CodeConnect</Link>
        </div>
        <div className='right-navbar'>
           
            <Link to="/profile" className='navbar-link'>Profile</Link>

            <Link to="/login" className='navbar-link'>Login</Link>
            <Link to="/addprofile" className='navbar-link'>Manage Profile</Link>


        </div>
    </nav>
   
  )
}

export default Navbar