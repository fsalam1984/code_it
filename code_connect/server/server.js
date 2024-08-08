// server.js
require('dotenv').config(); // Make sure this is at the top

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes

const authRoutes = require('../db/routes/authRoutes');
// const friendRoutes = require('../db/routes/friendRoutes');
// const profileRoutes = require('../db/routes/profileRoutes');
const searchRoutes = require('../db/routes/searchRoutes');
// const testRoutes = require('../db/routes/testRoute');

// Add more routes as needed

app.use('/api/auth', authRoutes);
app.use('/api/', searchRoutes);
app.use('/api/search', searchRoutes);

// app.use('/api/search', searchRoutes);


// Add more routes as needed

// Database connection
// mongoose.connect('mongodb://127.0.0.1:27017/code-connect');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // Add this line
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
