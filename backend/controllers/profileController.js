const Profile = require('../models/Profile');

// Create or update a profile
exports.createOrUpdateProfile = async (req, res) => {
    try {
        const { userId, bio, years_of_experience, companies, job_title, education, languages, niche, unique_characteristic, images } = req.body;

        let profile = await Profile.findOne({ user: userId });
        if (profile) {
            // Update existing profile
            profile = await Profile.findOneAndUpdate(
                { user: userId },
                { $set: { bio, years_of_experience, companies, job_title, education, languages, niche, unique_characteristic, images } },
                { new: true }
            );
            return res.json(profile);
        }

        // Create new profile
        profile = new Profile({ user: userId, bio, years_of_experience, companies, job_title, education, languages, niche, unique_characteristic, images });
        await profile.save();
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Get a profile by user ID
exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.userId });
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Delete a profile by user ID
exports.deleteProfile = async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.params.userId });
        res.json({ msg: 'Profile deleted' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
