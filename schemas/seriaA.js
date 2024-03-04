const mongoose = require('mongoose');

const seriaSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'seriaTeams' });;

// Create a model from the schema
 const seriaModel = mongoose.model('seriaModel', seriaSchema);

const newTeam = new seriaModel({
    "name": "Juventus",
    "founded": 1897,
    "stadium": "Allianz Stadium",
    "city": "Turin, Italy"
  });

  newTeam.save()
  .then((result) => {
    console.log('Data saved successfully:', result);
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });


  module.exports = mongoose.model('seriaModel', seriaSchema);