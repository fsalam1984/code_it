import React, { useState } from 'react';
import '../css/PotentialFriends.css';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FRIEND, REMOVE_FRIEND } from '../utils/mutations';
import { QUERY_ALL_USERS, QUERY_ME } from '../utils/queries';

const PotentialFriends = () => {
    const [addFriend] = useMutation(ADD_FRIEND);
    const [deleteFriend] = useMutation(REMOVE_FRIEND);
    const { data, loading } = useQuery(QUERY_ALL_USERS);
    
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    const friends = data?.users;

    const handleAddFriend = async (id) => {
        try {
            await addFriend({ variables: { friendId: id } });
            window.location.assign('/friends');
        } catch (error) {
            console.log("Error adding friend:", error);
        }
    };

    const handleDeleteFriend = async (id) => {
        try {
            await deleteFriend({ variables: { friendId: id } });
        } catch (error) {
            console.log("Error deleting friend:", error);
        }
    };

    return (
        <div className="container-profile">
            <div className="friends-container">
                {friends.map(friend => (
                    <div key={friend.id} className="friend-box">
                        <img src={friend.profile.images[0]} alt={friend.name} />
                        <h3>{friend.username}</h3>
                        <p>{friend.profile.bio}</p>
                        <p>{friend.profile.education}</p>
                        <button onClick={() => handleAddFriend(friend._id)} className="add-friend-button">
                            Add Friend
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PotentialFriends;
