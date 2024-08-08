import React, { useState } from 'react';
import axios from 'axios';

const FriendActions = () => {
  const [userId, setUserId] = useState('');
  const [friendId, setFriendId] = useState('');

  const addFriend = async () => {
    try {
      await axios.post('http://localhost:5000/add-friend', { userId, friendId });
      alert('Friend added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding friend');
    }
  };

  const deleteFriend = async () => {
    try {
      await axios.post('http://localhost:5000/delete-friend', { userId, friendId });
      alert('Friend deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting friend');
    }
  };

  return (
    <div>
      <input
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
      />
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={deleteFriend}>Delete Friend</button>
    </div>
  );
};

export default FriendActions;