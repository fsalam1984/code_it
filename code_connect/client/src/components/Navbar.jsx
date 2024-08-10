import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import SearchBar from './SearchBar'
const Navbar = ({setCount, count}) => {
  console.log(count);
  return (
    <nav className='navbar '>
         <div className='navbar-left'>
          

            <Link to="/" className='navbar-brand'> Code Connect</Link>
          
        </div>
        <SearchBar setCount={setCount} count={count}/>
        <div className='right-navbar'>
           
            <Link to="/profile" className='navbar-link'>Profile</Link>

            <Link to="/login" className='navbar-link'>Login</Link>
            <Link to="/addprofile" className='navbar-link'>Manage Profile</Link>


        </div>
    </nav>
   
  )
}

export default Navbar