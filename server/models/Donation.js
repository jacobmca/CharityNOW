const { Schema, model } = require('mongoose');

// const moment = require('moment');

const donationSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true,
            unique: false,
            // default: Date.now,
            // get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
        },
        user: {
            type: String,
            ref: 'User',
        },
        charity: 
        {
            type: String,
            ref: 'Charity',
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
