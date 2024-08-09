import React from 'react'
import '../css/Profile.css'
import { Link } from 'react-router-dom'


const manageProfile = () => {
  console.log("manage profile clicked")
  return (


    <div>

    </div>
  )
};

const viewFriends = () => {
  console.log("view friends clicked")
}
const addFriend = () => {
  console.log("add friends clicked")

}
const deleteFriend = () => {
  console.log("delete friends clicked")

}

const Profile = ({count}) => {


  return (


    <div>
      <h3>Welcome Test User!</h3>
      <div className="profile-container">
        {/* <!-- Cover Photo --> */}
        <div className="cover-photo">
          {/* <img src="./Users/faisalsalam/bootcamp/project3/code_it/code_connect/client/public/Images/social media pictures1.jpg" alt="Cover Photo" ></img> */}
          <img alt="Cover Photo" ></img>

        </div>


        {/* <!-- Profile Photo and Information --> */}
        <div className="profile-info">
          {/* <img src="profile-photo.jpg" alt="Profile Photo" class="profile-photo"></img> */}
          <img alt="Profile Photo" class="profile-photo"></img>
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
        <Link to='/friends' >
        <button className="view-friends">View Friends</button>
        </Link>
        {/* <Link to='/friends' >
        <button class="add-friend">Add Friend</button>
        </Link>
        <Link to='/friends' >
        <button class="delete-friend">Delete Friend</button>
        </Link> */}
      </div>

    </div>
  )
}

export default Profile