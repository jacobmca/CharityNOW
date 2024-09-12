const { Schema, model } = require('mongoose');

const moment = require('moment');

const donationSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true,
            unique: false,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        charity: 
        {
            type: Schema.Types.ObjectId,
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
donationSchema.virtual('amount').get(function () {
    return this.amount;
});

const User = model('Donation', donationSchema);
module.exports = User;
