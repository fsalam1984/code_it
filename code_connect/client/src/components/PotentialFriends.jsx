import React, { useState } from 'react';
// import axios from 'axios';
import '../css/PotentialFriends.css'
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_FRIEND } from '../utils/mutations';
import { REMOVE_FRIEND } from '../utils/mutations';
import { QUERY_ALL_USERS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
const PotentialFriends = () => {

  // const {loading, error, data} = useMutation(QUERY_ALL_USERS)
    const [addFriend] = useMutation(ADD_FRIEND);
    const [deleteFriend] = useMutation(REMOVE_FRIEND);
    const {data, loading} = useQuery(QUERY_ALL_USERS)
    
    console.log(data)
   
  if (loading){
    return (
      <div>loading</div>
    )
  }
    // Dummy friend data for display
    // const friends = [
    //   { id: '1', name: 'Jack Smith', imgSrc: '/Images/user1.jpg' },
    //   { id: '2', name: 'Mike Brown', imgSrc: '/Images/user2.jpg' },
    //   { id: '3', name: 'Jill Stone', imgSrc: '/Images/user3.jpg' },
    // ];
    const friends = data?.users
    // Function to handle adding a friend
    const handleAddFriend = async (id) => {
      try {
        await addFriend({ variables: { friendId:  id } });
        window.location.assign('/friends')
        // Optionally, handle success feedback here
      } catch (error) {
        console.log("Error adding friend:", error);
      }
    };

      // Function to handle deleting a friend
  const handleDeleteFriend = async (id) => {
    try {
      await deleteFriend({ variables: { friendId: id } });
      // Optionally, handle success feedback here
    } catch (error) {
      console.log("Error deleting friend:", error);
    }
  };

  return (
    
    <div>
    <div className="friends-list">
      <h2>Potential Friends</h2>
      <ul>
        {friends.map(friend => (  
          <li key={friend.id}>
            <img src={friend.profile.images[0]} alt={friend.name} />
            <span>{friend.username}</span>
            <span>{friend.profile.bio}</span>
            <span>{friend.profile.education}</span>
            <button onClick={() => handleAddFriend(friend._id)}>Add Friend</button>
            {/* <button onClick={() => handleDeleteFriend(friend._id)}>Remove Friend</button> */}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default PotentialFriends;
