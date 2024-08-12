import React from 'react'
import '../css/Home.css'
import Friends from './Friends'
const Home = () => {

  return (
    <>
      <div className='hero'>
        <h1 className='hero-text'></h1>
        <p className='hero-description'> This is the profile section where the user profile info is displayed ..........etc....
        </p>
        <div className='hero-image'> </div>
      <Friends />
      </div>


    </>

  )
}

export default Home