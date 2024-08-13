import React from 'react';
import '../css/Profile.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  if (loading) {
    return <div>Still loading...</div>;
  }

  return (
    <div className="container-profile">
      <div className="profile-header">
        <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
        <div className="profile-name">{profile.username}</div>
        <Link to="/manageprofile">
          <button className="edit-profile-button">Edit Profile</button>
        </Link>
      </div>

      <div className="profile-content">
        <div className="friends-list">
          <h3>Friends List</h3>
          <ul>
            {profile.friends?.length > 0 ? (
              profile.friends.map(friend => (
                <li key={friend._id}>
                  <img src={friend.profile?.images[0] || "/Images/friend1.jpg"} alt={friend.name} />
                  <span>{friend.username}</span>
                </li>
              ))
            ) : (
              <div>No friends available.</div>
            )}
          </ul>
          <Link to="/friends">
            <button className="view-friends-button">View Friends</button>
          </Link>
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
