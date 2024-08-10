const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const friendSchema = new Schema({
//   name: { type: String, required: true },
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
// });


const friendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: {type: String, required: true},
  location: {type: String, required: true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

});
const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
