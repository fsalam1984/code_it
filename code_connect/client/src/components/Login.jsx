import '../css/Login.css'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {

    const [loginUser] = useMutation(LOGIN_USER)

    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
   
            const { data } = await loginUser({
                variables: { ...formState },
              });
        
              Auth.login(data.login.token);


            // Redirect to homepage or another protected route
            window.location.href = '/profile';
        } catch (error) {
            console.log(error);
            // Show user-friendly error message
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="form-container">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Next</button>
            </form>
            <p>don't have an account? <a href="/create-account">create one</a></p>
        </div>
    );
};

export default Login