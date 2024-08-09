import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Profile from './components/Profile'

import AddProfile from './components/AddProfile'
import CreateAccount from './components/CreateAccount'
import ManageProfile from './components/ManageProfile'
import Registration from './components/Registrations'
import Friends from './components/Friends'

function App() {
  const [count, setCount] = useState('no user searched')

  return (
    <BrowserRouter>
      <Navbar setCount={setCount} count={count} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile count={count} />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addprofile' element={<AddProfile />}></Route>
        <Route path='/createaccount' element={<CreateAccount />}></Route>
        <Route path='/manageprofile' element={<ManageProfile />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/friends' element={<Friends />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
