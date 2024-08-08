const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  friendId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Friend', friendSchema);
