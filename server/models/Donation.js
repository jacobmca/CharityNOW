const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import the moment lib for user friendly formatting of the timestamp

// import schema from Book.js
const donorSchema = require('./Donation');

const donorSchema = new Schema(
    {
        
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        amount: {
            type: Number,
            required: true,
            unique: false,
        },
        charity: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Charity',
        },
       
        // set saved charities to be an array of the charitySchema
        //charities: [charitySchema],
    },
    // set this to use virtual below
    {
        toJSON: {
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
userSchema.virtual('charityCount').get(function () {
    return this.charities.length;
});

const User = model('User', userSchema);

module.exports = User;
