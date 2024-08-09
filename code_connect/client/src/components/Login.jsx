import '../css/Login.css'
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', formData);
            console.log(response.data);
            // Save the token and redirect to the homepage
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };
   

    return (
        <div className="form-container">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
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