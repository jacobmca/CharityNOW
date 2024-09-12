const { Schema } = require('mongoose');
const moment = require('moment');

const charitySchema = new Schema({
  name:
  {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  amountContributed: {
    type: Number,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
  },
  users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
  ],
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Donation',
    }
  ]
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
charitySchema.virtual('amountContributed').get(function () {
  return this.amountContributed;
});

const Charity = model('Charity', charitySchema);
module.exports = Charity;