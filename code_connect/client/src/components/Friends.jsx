import React, { useState, useEffect } from 'react';
import '../css/Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios';



const Friends = () => {

  const [userId, setUserId] = useState('');
  const [friendId, setFriendId] = useState('');

  const addFriend = async () => {
    try {
      await axios.post('http://localhost:3009/add-friend', { userId, friendId });
      alert('Friend added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding friend');
    }
  };
  
  const deleteFriend = async () => {
    try {
      await axios.post('http://localhost:3009/delete-friend', { userId, friendId });
      alert('Friend deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting friend');
    }
  };
  
  
    return (
        <div>Friends


      <div class="friends-list">
      <h2>Friends</h2>
      <ul>
        <li>
          <img src="/Images/friend1.jpg" alt="John Smith" />
          <span>John Smith</span>
        </li>
        <li>
          <img src="/Images/friend2.jpg" alt="Michelle Brown" />
          <span>Michelle Brown</span>
        </li>
        <li>
          <img src="/Images/friend3.jpg" alt="Jack Johnson" />
          <span>Jack Johnson</span>

        </li>
      </ul>
    </div>

    <div class="friend-actions">
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
        <button class="add-friend" >Add Friend</button>
        </Link>
        {/* <Link to='/friends' >
        <button class="delete-friend" onClick={deleteFriend}>Delete Friend</button>
        </Link>  */}
      </div>


    </div>

    )

}

export default Friends