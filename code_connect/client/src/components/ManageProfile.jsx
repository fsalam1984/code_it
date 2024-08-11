import React from 'react'

import { useMutation } from '@apollo/client';
import { UPDATE_BIO } from '../utils/mutations';

const ManageProfile = () => {


  const [updateBio] = useMutation(UPDATE_BIO);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const { data } = await loginUser({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);


        // Redirect to homepage or another protected route
        window.location.href = '/profile';
        console.log("Login is successful");
    } catch (error) {
        console.log(error);
        // Show user-friendly error message
        alert('Login failed. Please check your credentials.');
    }
};
  return (
    <div>

<form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="bio"
                    placeholder="Enter new bio"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />
             
                <button type="submit">Update</button>
            </form>





    </div>







  )
}

export default ManageProfile