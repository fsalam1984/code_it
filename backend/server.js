const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');
// Add more routes as needed

app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
// Add more routes as needed

// Database connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
