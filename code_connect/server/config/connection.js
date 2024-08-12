require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGO_URI_PROD)

// Handle connection events
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB.');
});

module.exports = db;