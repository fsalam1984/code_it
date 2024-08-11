import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
// import '../index.html'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
  // const [profile, setProfile] = useState({
  //   username: 'John Doe',
  //   bio: 'Lorem ipsum dolor sit amet...',
  //   friends: []
  // });

  const { loading, error, data } = useQuery(QUERY_ME)

  const profile = data?.me || {}



  if (loading) {
    return (
      <>
        <>Still loading</>
      </>
    )
  }



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
          <img  alt="Profile Photo" className="profile-photo" />
          {/* <Link to="/manageprofile">
            <button className="manage-profile">Manage Profile</button>
          </Link> */}
          <h1>{profile.username}</h1>
          <p>{profile.profile.bio}</p>
          <p>{profile.profile.companies}</p>
          <p>{profile.profile.job_title}</p>
          <p>{profile.profile.education}</p>
          <p>{profile.profile.niche}</p>
          <p>{profile.profile.unique_characteristic}</p>

        </div>
      </div>

      {/* Friends List */}
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          {profile.friends.map(friend => (
            <li key={friend._id}>
              <img src={friend.profile.images[0]} alt={friend.name} />
              <span>{friend.username}</span>
              {/* <button onClick={() => deleteFriend(friend._id)}>Delete</button> */}
            </li>
          ))}
        </ul>
      </div>

      {/* Friend Actions */}
      <div className="friend-actions">
        {/* <button className="view-friends" onClick={viewFriends}>View Friends</button> */}
        <Link to="/friends">
          <button className="add-friend">View Friends</button>
        </Link>
      </div>
    </div>
    
  );
};

export default Profile;
