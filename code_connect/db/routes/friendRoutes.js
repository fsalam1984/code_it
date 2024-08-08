// backend/routes/friendRoutes.js
const express = require('express');
const router = express.Router();
const Friend = require('../models/Friend');
const auth = require('../middleware/auth');

// Add Friend
router.post('/add', auth, async (req, res) => {
  const { friendId } = req.body;
  const userId = req.user.id;

  try {
    const newFriend = new Friend({ userId, friendId });
    await newFriend.save();
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Friends
router.get('/', auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const friends = await Friend.find({ userId, status: 'accepted' }).populate('friendId', 'name');
    res.status(200).json(friends);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete Friend
router.delete('/delete/:id', auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await Friend.findOneAndDelete({ userId, friendId: id });
    res.status(200).json({ message: 'Friend deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
