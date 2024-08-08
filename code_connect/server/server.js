require('dotenv').config(); // keep this at the top

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoutes = require('../db/routes/authRoutes');
const friendRoutes = require('../db/routes/friendRoutes');
const profileRoutes = require('../db/routes/profileRoutes');
const searchRoutes = require('../db/routes/searchRoutes');
const testRoutes = require('../db/routes/testRoute');
const friendsRoutes = require('./routes/friendsRoutes');


// Add more routes as needed

app.use('/api/auth', authRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/test', testRoutes);
app.use('/api/friends', friendsRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// last update wed