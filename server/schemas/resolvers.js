const { User, Charity, Donation } = require('../models');
// const  {AuthenticationError, signToken } = require('../utils/auth');Not sure if this would be a conflict so commented out
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express'); 

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('charities').populate('donations');
      }
      throw new AuthenticationError('Not logged in');
    },
    allCharities: async () => {
      return Charity.find().populate('users').populate('donations');
    },
    charity: async (parent, { _id }) => {
      return Charity.findById(_id).populate('users').populate('donations');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
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
    addCharity: async (parent, args, context) => {

      if (context.user) {
        const charity = await Charity.create(args);
        await User.findByIdAndUpdate(context.user._id, { $addToSet: { charities: charity._id } });
        return charity;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addDonation: async (parent, { charityId, amount }, context) => {
      if (context.user) {
        const donation = await Donation.create({ amount, user: context.user._id, charity: charityId });
        await Charity.findByIdAndUpdate(charityId, { $addToSet: { donations: donation._id } });
        await User.findByIdAndUpdate(context.user._id, { $addToSet: { donations: donation._id } });
        return donation;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};



module.exports = resolvers;
