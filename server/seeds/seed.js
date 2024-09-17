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
  await cleanDB("Donation", "donations");

  // bulk create each model
  const users = await User.insertMany(userData);
  console.log(users);
  let charities = [];
  for (let i=0; i<charityData.length; i++){
    let charity = await Charity.create({...charityData[i], users:[users[i]._id]});
    console.log(charity);
    await User.findByIdAndUpdate(users[i]._id, { $addToSet: { charities: charity._id } });
    charities.push(charity);
  }
  for (let i=0; i<donationData.length; i++){
    let donation = await Donation.create({...donationData[i], user: users[i]._id, charity: charities[i]._id});
    console.log(donation);
    await Charity.findByIdAndUpdate(charities[i]._id, { $addToSet: { donations: donation._id } });
        await User.findByIdAndUpdate(users[i]._id, { $addToSet: { donations: donation._id } });
  }
  // const charities = await Charity.insertMany(charityData); 
  // const donations = await Donation.insertMany(donationData);


  // for(newCharity of charities) {
  //   // randomly add each charity to a user
  //   const tempUser = users[Math.floor(Math.random() * users.length)];
  //   tempUser.charities.push(newCharity._id);
  //   await tempUser.save();
  // }



  console.log('all done!');
  process.exit(0);
});
