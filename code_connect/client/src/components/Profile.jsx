import React, { useState } from 'react';
import '../css/Profile.css';
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
<div className="container-profile">
  <div className="profile-header">
    <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
    <div className="profile-name">{profile.username}</div>
    <Link to="/manageprofile">
      <button className="edit-profile-button">Edit Profile</button>
    </Link>
  </div>

  <div className="line-separator"></div>
  
  <div className="content-container">
    <div className="friends-list">
      <h3>Friends List</h3>
      <p>No friends available.</p>
      <button className="view-friends-button" onClick={viewFriends}>View Friends</button>
    </div>
    
    <div className="profile-info-grid">
      <div className="profile-info-card">Bio: {profile.profile?.bio}</div>
      <div className="profile-info-card">Companies: {profile.profile?.companies}</div>
      <div className="profile-info-card">Job Title: {profile.profile?.job_title}</div>
      <div className="profile-info-card">Education: {profile.profile?.education}</div>
      <div className="profile-info-card">Niche: {profile.profile?.niche}</div>
      <div className="profile-info-card">Unique Characteristic: {profile.profile?.unique_characteristic}</div>
    </div>
  </div>
</div>

);
};

export default Profile;
