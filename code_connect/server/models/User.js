// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must match an email address!'],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },
//   profile: {
//     bio: String,
//     years_of_experience: Number,
//     companies: [String],
//     job_title: String,
//     education: String,
//     languages: [String],
//     niche: String,
//     unique_characteristic: String,
//     images: [String]
//   },
//   friends: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
// });

// // Pre-save hook to hash the password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next(); // Only hash if password is modified

//   try {
//     const salt = await bcrypt.genSalt(10); // Generate a salt
//     const hashedPassword = await bcrypt.hash(this.password, salt); // Hash the password
//     this.password = hashedPassword; // Save the hashed password
//     next();
//   } catch (err) {
//     return next(err);
//   }
// });
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const User = model('User', userSchema);

// module.exports = User;

//Updates


const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
  bio: String,
  years_of_experience: Number,
  companies: [String],
  job_title: String,
  education: String,
  languages: [String],
  niche: String,
  unique_characteristic: String,
  images: [String]
}, { _id: false }); // Avoid creating an _id for this subdocument

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  profile: profileSchema, // Use the profileSchema here
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User', 
    },
  ],
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Only hash if password is modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(this.password, salt); // Hash the password
    this.password = hashedPassword; // Save the hashed password
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
