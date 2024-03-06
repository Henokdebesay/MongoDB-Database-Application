const mongoose = require('mongoose');

const premiereSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'premiereTeams' });

const Premiere = mongoose.model('Premiere', premiereSchema);


// Create a model from the schema
 const premiereModel = mongoose.model('premiereModel', premiereSchema);


const newTeam = new premiereModel({
    "name": "Manchester United",
    "founded": 1878,
    "stadium": "Old Trafford",
    "city": "Manchester, England"
  });

premiereModel.createCollection();


  // newTeam.insertMany()
  // .then((result) => {
  //   console.log('Data saved successfully:', result);
  // })
  // .catch((error) => {
  //   console.error('Error saving data:', error);
  // });


  module.exports = mongoose.model('premiereModel', premiereSchema);