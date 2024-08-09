const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');

// Get all friends for a user
router.get('/', async (req, res) => {
  try {
    const friends = await Friend.find({ userId: req.user._id });
    res.json(friends);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

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
router.get('/', async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})


// Add a friend
router.post('/add', async (req, res) => {
  const newFriend = new Friend({ name: req.body.name , bio: req.body.bio, location: req.body.location});
  try {
    const savedFriend = await newFriend.save();
    res.status(201).json(savedFriend);
  } catch (err) {
    res.status(400).json(err);
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
