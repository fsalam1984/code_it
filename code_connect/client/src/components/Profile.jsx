import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet...',
    friends: []
  });

  useEffect(() => {
    // Fetch user profile data from backend
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => setProfile({
        username: data.username,
        bio: data.profile.bio,
        friends: data.friends || []
      }))
      .catch(error => console.log('Error:', error));
  }, []);

  const viewFriends = () => {
    console.log("View friends clicked");
    // Fetch friends list
    fetch('/api/friends')
      .then(response => response.json())
      .then(data => setProfile(prev => ({ ...prev, friends: data })))
      .catch(error => console.log('Error:', error));
  };

  const addFriend = () => {
    console.log("Add friend clicked");
    // Example friend data
    const newFriend = { name: 'New Friend' };

    fetch('/api/friends', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFriend)
    })
      .then(response => response.json())
      .then(data => viewFriends()) // Refresh friends list
      .catch(error => console.log('Error:', error));
  };

  const deleteFriend = (id) => {
    console.log("Delete friend clicked", id);
    fetch(`/api/friends/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => viewFriends()) // Refresh friends list
      .catch(error => console.log('Error:', error));
  };

  return (
    <div>
      <h3>Welcome {profile.username}!</h3>
      <div className="profile-container">
        {/* Cover Photo */}
        <div className="cover-photo">
          <img alt="Cover Photo" />
        </div>

        {/* Profile Photo and Information */}
        <div className="profile-info">
          <img alt="Profile Photo" className="profile-photo" />
          <Link to="/manageprofile">
            <button className="manage-profile">Manage Profile</button>
          </Link>
          <h1>{profile.username}</h1>
          <p>{profile.bio}</p>
        </div>
      </div>

      {/* Friends List */}
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          {profile.friends.map(friend => (
            <li key={friend._id}>
              <img src="/Images/friend1.jpg" alt={friend.name} />
              <span>{friend.name}</span>
              <button onClick={() => deleteFriend(friend._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Friend Actions */}
      <div className="friend-actions">
        {/* <button className="view-friends" onClick={viewFriends}>View Friends</button> */}
        <Link to="/friends">
                <button className="add-friend" onClick={viewFriends}>View Friends</button>
                </Link>
      </div>
    </div>
  );
};

export default Profile;
