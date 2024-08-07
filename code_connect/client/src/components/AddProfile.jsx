import React from 'react'
// import '..css/AddProfile.css'
const AddProfile = () => {
  return (
    <div className='add-profile'>Add Profile

        <h2>Add Profile</h2> <br />
        <div className="form-group">
          <label htmlFor='bio'>Bio:</label>
          <input type='text' placeholder='Enter Bio' />
        </div>
        <div className="form-group">
          <label htmlFor='yearsofexp'>Years of experience:</label>
          <input type='text' placeholder='Enter Years of Experience' />
        </div>
        <div className="form-group">
          <label htmlFor='employers'>Employers:</label>
          <input type='text' placeholder='Enter Employers' />
        </div>
        <div className="form-group">
          <label htmlFor='jobtitle'>Job title:</label>
          <input type='text' placeholder='Enter Job title' />
        </div>
     <button className='btn-submit'>Submit</button>












    </div>
  )
}

export default AddProfile