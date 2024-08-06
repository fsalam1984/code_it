import React from 'react'
import '../css/Login.css'
const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login</h2> <br />
        <div className="form-group">
          <label htmlFor='username'>Username:</label>
          <input type='text' placeholder='Enter Username' />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password:</label>
          <input type='text' placeholder='Enter Password' />
        </div>
     <button className='btn-login'>Login</button>











      </div>



    </div>
  )
}

export default Login