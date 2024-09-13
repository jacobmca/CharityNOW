const { User, Charity } = require('../models');
const  {AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.findOne({_id:context.user._id});
    },

  allCharity: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Charity.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
