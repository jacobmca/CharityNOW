const { Schema, model } = require('mongoose');

// const moment = require('moment');

const donationSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true,
            // unique: false,
            // default: Date.now,
            // get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',  // Ensure this matches the User model name
            required: true,
        },
        charity: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Charity',  // Ensure this matches the Charity model name
            required: true,
        },
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);

// return the amount donated
donationSchema.virtual('totalAmount').get(function () {
    return this.amount;
});

const Donation = model('Donation', donationSchema);
module.exports = Donation;
