const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const charitySchema = new Schema({
  name: 
    {
      type: String,
      required:true
    },
  
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Charity = model('Charity', charitySchema);
module.exports = Charity;
