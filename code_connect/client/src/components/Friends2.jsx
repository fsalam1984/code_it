import React, { useState, useEffect } from 'react';
import '../css/Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';


const Friends = () => {

  // const [userId, setUserId] = useState('');
  // const [friendId, setFriendId] = useState('');
  const {loading, error, data} = useQuery(QUERY_ALL_USERS)

  const friends = data?.users || {}

  // const addFriend = async () => {
  //   try {
  //     await axios.post('http://localhost:3009/add-friend', { userId, friendId });
  //     alert('Friend added successfully');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Error adding friend');
  //   }
  // };
  
  // const deleteFriend = async () => {
  //   try {
  //     await axios.post('http://localhost:3009/delete-friend', { userId, friendId });
  //     alert('Friend deleted successfully');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Error deleting friend');
  //   }
  // };
  
  
    return (
        <div> 


      <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        <li>
          <img src="/Images/friend1.jpg" alt="John Smith" />
          <span>John Smith</span>
        <button className="delete-friend">Delete Friend</button>
        </li>
        <li>
          <img src="/Images/friend2.jpg" alt="Michelle Brown" />
          <span>Michelle Brown</span>
          <button className="delete-friend">Delete Friend</button>

        </li>
        <li>
          <img src="/Images/friend3.jpg" alt="Jack Johnson" />
          <span>Jack Johnson</span>
          <button className="delete-friend">Delete Friend</button>


        </li>
      </ul>
    </div>

    <div className="friend-actions">
    {/* <input
        type="text"
        placeholder="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Friend User ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      /> */}
       
         <Link to='/potential-friends' >
        <button className="add-friend" >Add Friend</button>
        </Link>
   
      </div>


    </div>

    )

}

export default Friends