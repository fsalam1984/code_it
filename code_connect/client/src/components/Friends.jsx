import React, { useState, useEffect } from 'react';
import '../css/Friends.css';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_FRIEND } from '../utils/mutations';

const Friends = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const [deleteFriend] = useMutation(REMOVE_FRIEND);

  if (loading) return <div>Loading...</div>;

  const friends = data?.me?.friends || [];

  const handleDeleteFriend = async (id) => {
    try {
      await deleteFriend({ variables: { friendId: id } });
      alert('Friend Deleted.');
      window.location.assign('/friends');
    } catch (error) {
      console.log("Error deleting friend:", error);
    }
  };

  return (
    <div className="container-profile">
      <div className="friends-container">
        {friends.map((friend) => (
          <div key={friend._id} className="friend-box">
            <img src={friend.profile.images[0]} alt={friend.username} />
            <h3>{friend.username}</h3>
            <p>{friend.profile.bio}</p>
            <p>{friend.profile.education}</p>
            <button
              onClick={() => handleDeleteFriend(friend._id)}
              className="remove-friend-button"
            >
              Remove Friend
            </button>
          </div>
        ))}
      </div>
      <div className="friend-actions">
        <Link to='/potential-friends'>
          <button className="add-friend-button">Add Friend</button>
        </Link>
      </div>
    </div>
  );
};

export default Friends;
