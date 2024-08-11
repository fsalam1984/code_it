import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login'
import Login2 from './components/Login'
import Profile from './components/Profile'
import AddProfile from './components/AddProfile'
import CreateAccount from './components/CreateAccount'
import ManageProfile from './components/ManageProfile'
import Registration from './components/Registrations'
import Friends from './components/Friends'
// import FriendActions from './components/FriendActions'
// import Friendscopy from './components/Friendscopy'
import PotentialFriends from './components/PotentialFriends'
import SearchResults from './components/SearchResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile  />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/addprofile',
        element: <AddProfile />,
      },
      {
        path: '/createaccount',
        element: <CreateAccount />,
      },
      {
        path: '/manageprofile',
        element: <ManageProfile />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/friends' ,
        element: <Friends />,
      },
      {
        path: '/potential-friends',
        element: <PotentialFriends />,
      },
      {
        path: "/results/:userId",
        element: <SearchResults />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
