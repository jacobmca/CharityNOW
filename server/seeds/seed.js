const db = require('../config/connection');
const { Charity, User, Donation } = require('../models');
const cleanDB = require('./cleanDB');

const charityData = require('./charityData.json');
const userData = require('./userData.json');
const donationData = require('./donationData.json');

db.once('open', async () => {
  // clean database
  await cleanDB("Charity", "charities");
  await cleanDB("User", "users");

  // bulk create each model
  const charities = await Charity.insertMany(charityData); 
  const users = await User.insertMany(userData);
  const donations = await Donation.insertMany(donationData);


  for(newCharity of charities) {
    // randomly add each charity to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.charities.push(newCharity._id);
    await tempUser.save();
  }



  console.log('all done!');
  process.exit(0);
});
