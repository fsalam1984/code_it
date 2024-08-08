const { randomUUID } = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
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
    },
    profile: {
        bio: {
            type: String,
            default: ''
        },
        yearsOfExp: {
            type: String,
            default: ''
        },
        employers: {
            type: String,
            default: ''
        },
        jobTitle: {
            type: String,
            default: ''
        }
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
