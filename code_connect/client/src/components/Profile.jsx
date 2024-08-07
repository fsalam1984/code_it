import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [friends, setFriends] = useState([]);
  const [friendId, setFriendId] = useState(''); // For adding/deleting a friend

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axios.get('/api/friends'); // Replace with your actual endpoint
      setFriends(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  const handleAddFriend = async () => {
    try {
      await axios.post('/api/friends', { friendId }); // Replace with your actual endpoint
      fetchFriends();
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const handleDeleteFriend = async (id) => {
    try {
      await axios.delete(`/api/friends/${id}`); // Replace with your actual endpoint
      fetchFriends();
    } catch (error) {
      console.error('Error deleting friend:', error);
    }
  };

  return (
    <div>
      <h3>Welcome Test User!</h3>
      <div className="profile-container">
        <div className="cover-photo">
          <img alt="Cover Photo" />
        </div>
        <div className="profile-info">
          <img alt="Profile Photo" className="profile-photo" />
          <h1>John Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          {friends.map((friend) => (
            <li key={friend._id}>
              <img src={friend.profilePicture} alt={friend.name} />
              <span>{friend.name}</span>
              <button onClick={() => handleDeleteFriend(friend._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="friend-actions">
        <button onClick={fetchFriends}>View Friends</button>
        <input
          type="text"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
          placeholder="Friend ID"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
      </div>
    </div>
  );
};

export default Profile;
