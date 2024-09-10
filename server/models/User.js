const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import the moment lib for user friendly formatting of the timestamp
const moment = require('moment');

// import schema from Book.js
const charitySchema = require('./Charity');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        charities: [charitySchema],

        charityContributions: [
            {
                charityId: {
                    type: Schema.Types.ObjectId, 
                    ref: 'Charity'
                },
                amount: Number,
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
                }
            }
        ]
    },
    // set this to use virtual below
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('bookCount').get(function () {
    return this.savedBooks.length;
});

const User = model('User', userSchema);

module.exports = User;
