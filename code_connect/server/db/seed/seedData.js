const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Profile = require('./models/Profile');
dotenv.config();
const bcrypt = require('bcryptjs');

const users = [
    
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
];
const profiles = [
  {
    user: 'ObjectId of John Doe',
    bio: 'Developer from NYC',
    location: 'New York, USA',
  },
  {
    user: 'ObjectId of Jane Smith',
    bio: 'Designer from LA',
    location: 'Los Angeles, USA',
  },



];

const friends = [
    {
      user: 'ObjectId of John Doe',
      bio: 'Developer from NYC',
      location: 'New York, USA',
    },
    {
      user: 'ObjectId of Jane Smith',
      bio: 'Designer from LA',
      location: 'Los Angeles, USA',
    },
  
  
    
  ];
const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await User.deleteMany(); // Clear the User collection
    await Profile.deleteMany(); // Clear the Profile collection
    const createdUsers = await User.insertMany(users); // Insert users
    profiles[0].user = createdUsers[0]._id; // Set user ID for the first profile
    profiles[1].user = createdUsers[1]._id; // Set user ID for the second profile
    await Profile.insertMany(profiles); // Insert profiles
    console.log('Data seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
seedData();