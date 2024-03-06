const mongoose = require('mongoose');

const laLigaSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  founded: Number,
  stadium: String,
  city: String
}, { collection: 'laLigaTeams' });;

const LaLiga = mongoose.model('LaLiga', laLigaSchema);


// Create a model from the schema
 const laLigaModel = mongoose.model('laLigaModel', laLigaSchema);

 
 const newTeam = new laLigaModel({
    "name": "Real Madrid",
    "founded": 1902,
    "stadium": "Santiago Bernabéu Stadium",
    "city": "Madrid, Spain"
  });

  laLigaModel.createCollection();


  // newTeam.insertMany()
  // .then((result) => {
  //   console.log('Data saved successfully:', result);
  // })
  // .catch((error) => {
  //   console.error('Error saving data:', error);
  // });

module.exports = mongoose.model('laLigaModel', laLigaSchema);