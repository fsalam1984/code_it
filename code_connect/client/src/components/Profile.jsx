import React from 'react'
import '../css/Profile.css'
import { Link } from 'react-router-dom'

const viewFriends = () => {
  console.log("view friends clicked")
  // Call backend API to get the list of friends
  fetch('/api/friends')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const addFriend = () => {
  console.log("add friends clicked")
  // Call backend API to add a friend
  fetch('/api/friends', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'New Friend' }) // Example friend name
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const deleteFriend = () => {
  console.log("delete friends clicked")
  // Call backend API to delete a friend
  fetch('/api/friends/123', { // Example friend ID
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const Profile = () => {
  return (
    <div>
      <h3>Welcome Test User!</h3>
      <div className="profile-container">
        {/* <!-- Cover Photo --> */}
        <div className="cover-photo">
          <img alt="Cover Photo" />
        </div>

        {/* <!-- Profile Photo and Information --> */}
        <div className="profile-info">
          <img alt="Profile Photo" class="profile-photo" />
          <Link to="/manageprofile">
            <button class='manage profile'>Manage profile</button>
          </Link>
          <h1>John Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      {/* <!-- Friends List --> */}
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          <li>
            <img src="/Images/friend1.jpg" alt="John Smith" />
            <span>John Smith</span>
          </li>
          <li>
            <img src="/Images/friend2.jpg" alt="Michelle Brown" />
            <span>Michelle Brown</span>
          </li>
          <li>
            <img src="/Images/friend3.jpg" alt="Jack Johnson" />
            <span>Jack Johnson</span>
          </li>
        </ul>
      </div>

      {/* <!-- Friend Actions --> */}
      <div className="friend-actions">
        <button className="view-friends" onClick={viewFriends}>View Friends</button>
        <button className="add-friend" onClick={addFriend}>Add Friend</button>
        <button className="delete-friend" onClick={deleteFriend}>Delete Friend</button>
      </div>
    </div>
  )
}

export default Profile
