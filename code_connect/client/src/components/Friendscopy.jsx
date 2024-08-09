// require('dotenv').config(); // keep this at the top
import React, { useState, useEffect } from 'react';
import '../css/Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Friends() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch friends on component mount
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axios.get('http://localhost:3009/api/friends', {name, bio, location});
      setFriends(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addFriend = async () => {
    try {
      await axios.post('http://localhost:3009/api/friends/add', { name, bio, location });
      setName('');
      fetchFriends();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFriend = async (id) => {
    try {
      await axios.delete(`http://localhost:${PORT}/api/friends/delete/${id}`);
      fetchFriends();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>Friends


    <div className="friends-list">
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
    
 
   
    <div className="App">
      <h1>Friends List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter friend's name"
      />
      <button onClick={addFriend}>Add Friend</button>
      <ul>
        {friends.map(friend => (
          <li key={friend._id}>
            {friend.name}
            <button onClick={() => deleteFriend(friend._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    </div>
    </div>
  );
}

// export default App;
export default Friends