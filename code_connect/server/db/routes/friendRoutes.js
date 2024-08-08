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
router.post('/', async (req, res) => {
  const { name } = req.body;
  const newFriend = new Friend({ name, userId: req.user._id });

  try {
    await newFriend.save();
    res.json('Friend added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Delete a friend
router.delete('/:id', async (req, res) => {
  try {
    await Friend.findByIdAndDelete(req.params.id);
    res.json('Friend deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
