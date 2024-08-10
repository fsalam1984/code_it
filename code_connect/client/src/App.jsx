import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
// import FriendActions from './components/FriendActions'
// import Friendscopy from './components/Friendscopy'
import PotentialFriends from './components/PotentialFriends'
import SearchResults from './components/SearchResults';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState('no user searched')

  return (   
  <ApolloProvider client={client}>
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
        <Route path='/potential-friends' element={<PotentialFriends />}></Route>
        <Route path="/results/:userId" element={<SearchResults />} />

        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
