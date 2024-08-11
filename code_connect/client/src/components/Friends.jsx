import React, { useState, useEffect } from 'react';
import '../css/Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ALL_USERS, QUERY_ME } from '../utils/queries';
import { REMOVE_FRIEND } from '../utils/mutations';


const Friends = () => {

  // const [userId, setUserId] = useState('');
  // const [friendId, setFriendId] = useState('');
  const {loading, error, data} = useQuery(QUERY_ME)
  const [deleteFriend] = useMutation(REMOVE_FRIEND);
  if (loading){
    return (
      <div>loading</div>
    )
  }
  const friends = data?.me?.friends || {}
  console.log(friends)
       // Function to handle deleting a friend
       const handleDeleteFriend = async (id) => {
        try {
          await deleteFriend({ variables: { friendId: id } });
          alert('Friend Deleted.')
          window.location.assign('/friends')

          // Optionally, handle success feedback here
        } catch (error) {
          console.log("Error deleting friend:", error);
        }
      };

    return (
        <div> 


      <div className="friends-list">
      <h2>Friends</h2>
      <ul>

        <ul>
        {friends.map(friend => (  
          <li key={friend.id}>
            <img src={friend.profile.images[0]} alt={friend.name} />
            <span>{friend.username}</span>
            <span>{friend.profile.bio}</span>
            <span>{friend.profile.education}</span>
            {/* <button onClick={() => handleAddFriend(friend._id)}>Add Friend</button> */}
            <button onClick={() => handleDeleteFriend(friend._id)}>Remove Friend</button>
          </li>
        ))}
      </ul>



      </ul>
    </div>

    <div className="friend-actions">
    {/* <input
        type="text"
        placeholder="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Friend User ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      /> */}
       
         <Link to='/potential-friends' >
        <button className="add-friend" >Add Friend</button>
        </Link>
   
      </div>


    </div>

    )

}

export default Friends