import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Profile.css'; // Import the CSS file if needed
import { Link } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState(''); // Added state for bio
  const [location, setLocation] = useState(''); // Added state for location

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axios.get('http://localhost:3009/api/friends');
      setFriends(response.data);
    } catch (err) {
      console.log('Error fetching friends:', err);
    }
  };

  const addFriend = async () => {
    if (name.trim() === '' || bio.trim() === '' || location.trim() === '') return; // Ensure all fields are filled
    try {
      await axios.post('http://localhost:3009/api/friends/add', { name, bio, location });
      setName(''); // Clear the input fields
      setBio('');
      setLocation('');
      fetchFriends(); // Refresh the list of friends
    } catch (err) {
      console.log('Error adding friend:', err);
    }
  };

  const deleteFriend = async (id) => {
    try {
      await axios.delete(`http://localhost:3009/api/friends/delete/${id}`);
      fetchFriends(); // Refresh the list of friends
    } catch (err) {
      console.log('Error deleting friend:', err);
    }
  };

  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend._id}>
            <img src={`/Images/${friend.name.toLowerCase().replace(/\s+/g, '')}.jpg`} alt={friend.name} />
            <span>{friend.name}</span>
            <button onClick={() => deleteFriend(friend._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="App">
        <h1>Friends List</h1>
        <input
          type="text"
          placeholder="Enter friend's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addFriend}>Add Friend</button>
      </div>

      <div className="potential-friends">
      <Link to="/potential-friends">
                <button className="potential-friends" >Potential Friends</button>
                </Link>


        </div>
    </div>
  );
}

export default App;
