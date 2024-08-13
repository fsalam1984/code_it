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
      <div className="profile-info">
      <img  src={profile.profile.images} alt="Profile Photo" className="profile-photo" />
       </div>
        <div className="profile-name">{profile.username}</div>
      </div>

      <div className="profile-content">
        <div className="profile-info-grid">
          <div className="profile-info-card">Bio: {profile.profile?.bio}</div>
          <div className="profile-info-card">Companies: {profile.profile?.companies}</div>
          <div className="profile-info-card">Job Title: {profile.profile?.job_title}</div>
          <div className="profile-info-card">Education: {profile.profile?.education}</div>
          <div className="profile-info-card">Niche: {profile.profile?.niche}</div>
          <div className="profile-info-card">Unique Characteristic: {profile.profile?.unique_characteristic}</div>
        </div>
      </div>

      <Link to="/friends">
            <button className="view-friends-button">View Friends</button>
          </Link>

    </div>
  );
};

export default Profile;
