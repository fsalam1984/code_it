import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Login2 from './components/Login'

import Profile from './components/Profile'

import AddProfile from './components/AddProfile'
import CreateAccount from './components/CreateAccount'
import ManageProfile from './components/ManageProfile'
import Registration from './components/Registrations'
import Friends from './components/Friends'
import FriendActions from './components/FriendActions'
import Friendscopy from './components/Friendscopy'
import PotentialFriends from './components/PotentialFriends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login2 />}></Route>
        <Route path='/createaccount' element={<CreateAccount />}></Route>
        <Route path='/manageprofile' element={<ManageProfile />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/potential-friends' element={<PotentialFriends />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
