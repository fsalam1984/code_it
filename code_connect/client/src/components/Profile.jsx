import React, { useState } from 'react';
import '../css/Profile.css';
// import '../index.html'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  const viewFriends = () => {
    console.log("View friends clicked");
    fetch('/api/friends')
      .then(response => response.json())
      .then(data => setProfile(prev => ({ ...prev, friends: data })))
      .catch(error => console.log('Error:', error));
  };

  const addFriend = () => {
    console.log("Add friend clicked");
    const newFriend = { name: 'New Friend' };

    fetch('/api/friends', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFriend)
    })
      .then(response => response.json())
      .then(() => viewFriends())
      .catch(error => console.log('Error:', error));
  };

  const deleteFriend = (id) => {
    console.log("Delete friend clicked", id);
    fetch(`/api/friends/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => viewFriends())
      .catch(error => console.log('Error:', error));
  };

  if (loading) return <div className="text-center mt-5">Still loading...</div>;
  if (error) return <div className="text-center mt-5">Error loading profile.</div>;



  return (
    <div className="container-fluid mt-4">
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8 profile-section">
          <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
          <h1>{profile.username}</h1>
          <Link to="/manageprofile">
            <button className="btn btn-outline-secondary edit-profile-button">Edit Profile</button>
          </Link>
        </div>
      </div>

      <div className="row mt-4 friends-profile-container">
        <div className="col-md-6 friends-list">
          <h3>Friends</h3>
          <ul className="list-group">
            {profile.friends?.length > 0 ? (
              profile.friends.map(friend => (
                <li key={friend._id} className="list-group-item">
                  <img src="/Images/friend1.jpg" alt={friend.name} />
                  <span>{friend.name}</span>
                  <button onClick={() => deleteFriend(friend._id)}>Delete</button>
                </li>
              ))
            ) : (
              <div>No friends available.</div>
            )}
          </ul>
          <div className="d-flex justify-content-between mt-2">
            <button className="btn-custom" onClick={viewFriends}>View Friends</button>
            <button className="btn-custom" onClick={addFriend}>Add Friend</button>
          </div>
        </div>
        <div className="col-md-6 profile-info">
          <h3>Profile Information</h3>
          <p>{profile.profile.bio}</p>
          <p>{profile.profile.companies}</p>
          <p>{profile.profile.job_title}</p>
          <p>{profile.profile.education}</p>
          <p>{profile.profile.niche}</p>
          <p>{profile.profile.unique_characteristic}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Profile;
