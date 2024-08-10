import React, { useState } from 'react';
import axios from 'axios';
// import '..css/AddProfile.css'

const AddProfile = () => {
  // State for form inputs
  const [bio, setBio] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [employers, setEmployers] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare data to be sent to the backend
    const profileData = {
      bio,
      yearsOfExp,
      employers,
      jobTitle,
    };

    try {
      // Send data to the backend
      await axios.post('/api/user/profile', profileData);

      // Optionally, redirect to profile page or show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('There was an error updating the profile:', error);
    }
  };

  return (
    <div className='add-profile'>
      <h2>Add Profile</h2> <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='bio'>Bio:</label>
          <input
            type='text'
            id='bio'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder='Enter Bio'
          />
        </div>
        <div className="form-group">
          <label htmlFor='yearsOfExp'>Years of experience:</label>
          <input
            type='text'
            id='yearsOfExp'
            value={yearsOfExp}
            onChange={(e) => setYearsOfExp(e.target.value)}
            placeholder='Enter Years of Experience'
          />
        </div>
        <div className="form-group">
          <label htmlFor='employers'>Employers:</label>
          <input
            type='text'
            id='employers'
            value={employers}
            onChange={(e) => setEmployers(e.target.value)}
            placeholder='Enter Employers'
          />
        </div>
        <div className="form-group">
          <label htmlFor='jobTitle'>Job title:</label>
          <input
            type='text'
            id='jobTitle'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder='Enter Job title'
          />
        </div>
        <button type='submit' className='btn-submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddProfile;
