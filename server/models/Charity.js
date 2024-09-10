const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema 
// for the User's `contributions` array in User.js
const charitySchema = new Schema({
  // saved charity id from charity api
  charityId: {
    type: Schema.Types.ObjectId, 
    default: () => new Types.ObjectId(),
  },
  // saved charity name
  name: 
    {
      type: String,
      required:true
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
});

// If this is a subdocument schema and we are not creating a model out of it
// then we need to comment out the following two lines below
//const Charity = model('Charity', charitySchema);
//module.exports = Charity;

// Instead, we should export the schema
module.exports = charitySchema;
