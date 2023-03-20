const { User, Book } = require('../models');
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        getUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You must be logged in to use this feature.")
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials.")
            };

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials.')
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { user, savedBooks }, context) => {
           if  (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: {
                    savedBooks: body } },
                { new: true,
                runValidators: true }
            )

            return updatedUser
           }
           throw new AuthenticationError('You must be logged in to use this feature!')
        },
        deleteBook: async (parent, { user, bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId: params.bookId } } },
                    { new: true }
                );

                if (!updatedUser) {
                    return res.status(404).json({ message: "Could not find a user with this id."});
                }
                return updatedUser
            }
            throw new AuthenticationError("You must be logged in to use this feature.")
        }
    }
}

module.exports = resolvers;