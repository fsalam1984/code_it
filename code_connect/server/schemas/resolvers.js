const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    users: async (parents, args, context) => {
      if(context.user){
        return User.find({ _id: {$ne: context.user._id}}).populate("friends")
      }
      throw new AuthenticationError('User not authenticated');
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate("friends")
    },
    me: async (parent, args, context) => {
      //   if (context.user) {
      //     return User.findOne({ _id: context.user._id }).populate("friends")
      //   }
      //   throw AuthenticationError;
      // },
//Updated code to handle limit of friends
      if (context.user) {
        // Destructure limit from arguments
        const { limit } = args;
        // Find the user by ID and populate the friends field
        const user = await User.findOne({ _id: context.user._id })
          .populate({
            path: 'friends',
            options: {
              // Apply limit if provided
              ...(limit ? { limit } : {}),
            },
          })
          .exec(); // Ensure query execution
        if (!user) {
          throw new AuthenticationError('User not found');
        }
        return user;
      }
      throw new AuthenticationError('User not authenticated');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addFriend: async (parent, { friendId }, context) => {
      console.log(friendId)
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              friends: friendId,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        )
      }
      throw AuthenticationError;
    },
    removeFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              friends: friendId
            },
          },
          { new: true }
        )
      }
      throw AuthenticationError;
    },
    updateBio: async (parent ,{bioinfo}, context) =>{
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
              profile: {bio: bioinfo}
            },
          { new: true }
        ).populate('friends');
      }
      throw AuthenticationError;
    }
  },
};
module.exports = resolvers;