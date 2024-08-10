import axios from 'axios';
import React, { useState } from 'react';
import '../css/CreateAccount.css'; // Import CSS for styling

const CreateAccount = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [employers, setEmployers] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [error, setError] = useState(null); // For handling errors
  const [success, setSuccess] = useState(null); // For handling success messages

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare data to be sent to the backend
    const profileData = {
      bio,
      yearsOfExp,
      employers,
      jobTitle,
      username,
      password,
    };

    try {
      // Send data to the backend
      await axios.post('/api/user/profile', profileData);
      setSuccess('Profile created successfully! Redirecting...');
      setTimeout(() => {
        // Redirect to login page or another route after success
        window.location.href = '/login'; // Adjust the path as needed
      }, 2000); // Delay to allow user to see the success message
    } catch (error) {
      console.error('There was an error creating the profile:', error);
      setError('Profile creation failed. Please try again.');
    }
  };

  return (
    <div className='add-profile'>
      <h2>Create Profile</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
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
          <label htmlFor='yearsOfExp'>Years of Experience:</label>
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
          <label htmlFor='jobTitle'>Job Title:</label>
          <input
            type='text'
            id='jobTitle'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder='Enter Job Title'
          />
        </div>
        <div className="form-group">
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
          />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        <button type='submit' className='btn-submit'>Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount;
