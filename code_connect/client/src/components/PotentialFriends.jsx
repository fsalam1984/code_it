import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PotentialFriends.css'
import { useQuery } from '@apollo/client';

import { QUERY_ALL_USERS } from '../utils/queries';

const PotentialFriends = () => {

  const {loading, error, data} = useQuery(QUERY_ALL_USERS)

  const profile = data?.users || {}
  

  return (  
    <div>


    <div className="friends-list">
    <h2>Potential Friends</h2>
    <ul>
      <li>
        <img src="/Images/user1.jpg" alt="Jack Smith" />
        <span>Jack Smith</span>
        <button class="add-friend" >Add Friend</button>
        <button class="delete-friend" onClick={deleteFriend}>Delete Friend</button>


      </li>
      <li>
        <img src="/Images/user2.jpg" alt="Mike Brown" />
        <span>Mike Brown</span>
        <button class="add-friend" >Add Friend</button>
        <button class="delete-friend">Delete Friend</button>


      </li>
      <li>
        <img src="/Images/user3.jpg" alt="Jack Johnson" />
        <span>Jill Stone</span>
        <button class="add-friend" >Add Friend</button>
        <button class="delete-friend">Delete Friend</button>



      </li>
    </ul>
  </div>
  </div>

  )};

export default PotentialFriends;
