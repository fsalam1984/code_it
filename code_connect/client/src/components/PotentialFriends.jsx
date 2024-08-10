import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PotentialFriends.css'
const PotentialFriends = () => {
  const [potentialFriends, setPotentialFriends] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPotentialFriends = async () => {
      try {
        const response = await axios.get('http://localhost:3009/api/users/potential-friends');
        setPotentialFriends(response.data);
      } catch (err) {
        setError('Error fetching potential friends.');
        console.error('Error:', err);
      }
    };

    fetchPotentialFriends();
  }, []);

  const addFriend = async (friendId) => {
    try {
      await axios.post('http://localhost:3009/api/friends/add',   { friendId },
        {
          headers: { 'x-auth-token': token }, // Include token in headers
        });

      setPotentialFriends(potentialFriends.filter(friend => friend._id !== friendId));
    } catch (err) {
      setError('Error adding friend.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="potential-friends">
      <h2>Potential Friends</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {potentialFriends.map(friend => (
          <li key={friend._id}>
            <img src={`/Images/${friend.username}.jpg`} alt={friend.username} />
            <span>{friend.username}</span>
            <button onClick={() => addFriend(friend._id)}>Add Friend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PotentialFriends;
