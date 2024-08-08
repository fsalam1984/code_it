const { randomUUID } = require('crypto');
const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');
// let newObjectId = ObjectId() 
const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        // default: uuidv4,
        default: randomUUID,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
