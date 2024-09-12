const { Schema } = require('mongoose');
//const moment = require('moment');

const Donation = mongoose.model('Donation');

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
  /***  amountContributed as a standalone property should not be needed given 
   *    that it can be calculated dynamically by a dedicated virtual. Hence, 
   *    commented out for now so that we may test the dynamic calculation by virtual 
   ***/
  // amountContributed: {
  //   type: Number,
  //   default: Date.now,
  //   get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
  // },
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
// charitySchema.virtual('amountContributed').get(function () {
//   return this.amountContributed;
// });

// Virtual field to calculate the total amount contributed
charitySchema.virtual('amountContributed').get(async function () {
  const donations = await Donation.find({ charity: this._id });
  return donations.reduce((total, donation) => total + donation.amount, 0);
});

const Charity = model('Charity', charitySchema);
module.exports = Charity;