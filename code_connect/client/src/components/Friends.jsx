import React from 'react'
import '../css/Profile.css'
import { Link } from 'react-router-dom'

const Friends = () => {
    return (
        <div>Friends


      <div class="friends-list">
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

    <div class="friend-actions">
       
         <Link to='/friends' >
        <button class="add-friend">Add Friend</button>
        </Link>
        <Link to='/friends' >
        <button class="delete-friend">Delete Friend</button>
        </Link> 
      </div>


    </div>

    )

}

export default Friends