const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bio: String,
    years_of_experience: Number,
    companies: [String],
    job_title: String,
    education: String,
    languages: [String],
    niche: String,
    unique_characteristic: String,
    images: [String]
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
