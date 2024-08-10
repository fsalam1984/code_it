// server.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('../models/User'); // Import your User model

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
// const PORT = 3000;


// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/your-database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Authentication Route
router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Generate token
      const payload = {
        user: {
          id: user.id
        }
      };
  
      const token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });