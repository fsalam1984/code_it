import React, { useState } from 'react';
import '../css/CreateAccount.css'; // Import CSS for styling
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'; // Assuming ADD_USER is a valid mutation

const CreateAccount = () => {
  // Handle form submission
  const [addUser] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(null); // To handle success feedback

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const { username, email, password } = formState;
    
    try {
      await addUser({ variables: { username, email, password } });
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => {
        window.location.assign('/'); // Redirect after success
      }, 2000);
    } catch (err) {
      setError('Error creating account. Please try again.');
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className='form-container'>
      <h2>Create Account</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='email'>Email:</label>
          <input
            type="text"
            id='email'
            name='email' // Ensure name attribute is set
            value={formState.email}
            onChange={handleChange}
            placeholder='Enter Email'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username' // Ensure name attribute is set
            value={formState.username}
            onChange={handleChange}
            placeholder='Enter Username'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password' // Ensure name attribute is set
            value={formState.password}
            onChange={handleChange}
            placeholder='Enter Password'
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CreateAccount;
