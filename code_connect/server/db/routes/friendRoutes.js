const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');
const User = require('../models/User');



// Add a new friend
// router.post('/', async (req, res) => {
//   const { name } = req.body;
//   const newFriend = new Friend({ name, userId: req.user._id });

//   try {
//     await newFriend.save();
//     res.json('Friend added!');
//   } catch (err) {
//     res.status(400).json('Error: ' + err);
//   }
// });

// // Delete a friend
// router.delete('/:id', async (req, res) => {
//   try {
//     await Friend.findByIdAndDelete(req.params.id);
//     res.json('Friend deleted.');
//   } catch (err) {
//     res.status(400).json('Error: ' + err);
//   }
// });

//Updated code
//Get Friends
// router.get('/friends', async (req, res) => {
//   try {
//     const friends = await Friend.find();
//     res.json(friends);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// })

// Get all friends for a user
router.get('/friends', async (req, res) => {
  try {
    const friends = await Friend.find({ userId: req.user._id });
    res.json(friends);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});
// Add a friend
// router.post('/add', async (req, res) => {
//   const newFriend = new Friend({ name: req.body.name , bio: req.body.bio, location: req.body.location});
//   try {
//     const savedFriend = await newFriend.save();
//     res.status(201).json(savedFriend);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Add a friend
router.post('/add', async (req, res) => {
  try {
    const userId = req.user._id; // Make sure this is set by authentication middleware
    const { friendId } = req.body;

    // Check if the user is already friends with the friendId
    const existingFriend = await Friend.findOne({ userId, friendId });
    if (existingFriend) return res.status(400).json({ message: 'Already friends' });

    // Add friend
    const newFriend = new Friend({ userId, friendId });
    await newFriend.save();

    // Optionally add reverse friendship
    const reverseFriend = new Friend({ userId: friendId, friendId: userId });
    await reverseFriend.save();

    res.status(201).json({ message: 'Friend added' });
  } catch (err) {
    console.error('Error adding friend:', err);
    res.status(500).json({ error: 'Error adding friend' });
  }
});

// Fetch users who are not friends of the current user
router.get('/potential-friends', async (req, res) => {
  try {
    const userId = req.user._id; // Make sure this is set by authentication middleware

    // Find friends of the user
    const friends = await Friend.find({ userId: userId });
    const friendIds = friends.map(friend => friend.userId);

    // Fetch users who are not friends
    const potentialFriends = await User.find({ _id: { $nin: friendIds } }).limit(5); // Adjust limit as needed

    res.json(potentialFriends);
  } catch (err) {
    console.error('Error fetching potential friends:', err);
    res.status(500).json({ error: 'Error fetching potential friends' });
  }
});
// Delete a friend
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedFriend = await Friend.findByIdAndDelete(req.params.id);
    if (!deletedFriend) return res.status(404).json({ message: 'Friend not found' });
    res.status(200).json({ message: 'Friend deleted' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
