require('dotenv').config();
// const dotenv = require('dotenv').config();
// dotenv.config();
const mongoose = require('mongoose');
const User = require('../db/models/User');
const Profile = require('../db/models/Profile');
const Friend = require('../db/models/Friend')

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
      name: 'John Doe',
      bio: 'Developer from NYC',
      location: 'New York, USA',
    },
    {
      name: 'Jane Smith',
      bio: 'Designer from LA',
      location: 'Los Angeles, USA',
    },
    ,
    {
      name: 'Jimmy Jackson',
      bio: 'Designer from Dubai',
      location: 'Dubai, UAE',
    },
  
    
  ];
// const seedData = async () => {
//   try {
//     // MONGO_URI= 'mongodb://localhost:27017/code-connect'
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await User.deleteMany(); // Clear the User collection
//     await Profile.deleteMany(); // Clear the Profile collection
//     await Friend.deleteMany(); // Clear the Friend collection
//     const createdUsers = await User.insertMany(users); // Insert users
//     await Friend.insertMany(friends) // Insert friends
//     profiles[0].user = createdUsers[0]._id; // Set user ID for the first profile
//     profiles[1].user = createdUsers[1]._id; // Set user ID for the second profile

//     await Profile.insertMany(profiles); // Insert profiles
//     console.log('Data seeded!');
//     process.exit();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };
// seedData();

// MONGO_URI = process.env.MONGO_URI
MONGO_URI='mongodb://localhost:5000/code-connect'
// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Clear existing data
    return Friend.deleteMany({}) , 
    User.deleteMany({}), 
    Profile.deleteMany({})// Clear the Profile collection
  
  })
  .then(() => {
    // Insert seed data
    return Friend.insertMany(friends);
  })
  .then(() => {
    console.log('Seed data inserted');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });
