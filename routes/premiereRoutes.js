const express = require("express");
const router = express.Router();
const premiereModel = require('../schemas/premiereLeague.js');

let teams = [
    {
        name: "Manchester United",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Manchester",
    },
    {
        name: "Liverpool",
        founded: 1878,
        stadium: "Old lady",
        city: "Liverpool",
    },
    {
        name: "Manchester United",
        founded: 1880,
        stadium: " Etihad Stadium",
        city: "Manchester",
    },
    {
        name: "Chelsea",
        founded: 1878,
        stadium: "Old Trafford",
        city: "London",
    },
    {
        name: "Everton",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Liverpool",
    },
    {
        name: "Crystal Palace",
        founded: 1878,
        stadium: "Old Trafford",
        city: "London",
    },
    {
        name: "Totenham",
        founded: 1878,
        stadium: "Old Trafford",
        city: "London",
    },
    {
        name: "Arsenal",
        founded: 1878,
        stadium: "Fly Emirateas",
        city: "London",
    },{
        name: "Newcastle United",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Newcastle",
    },{
        name: "Westham United",
        founded: 1878,
        stadium: "Old Trafford",
        city: "London",
    }
]

router.get('/', (req,res) => {
    res.send(teams)

})

router.get('/', (req, res) => {
    premiereModel.find()
        .then((teams) => {
            res.send(teams);
        })
        .catch((error) => {
            console.error('Error fetching teams:', error);
            res.status(500).send("Error fetching teams");
        });
});

router.post('/', (req, res) => {
    const newTeamsData = req.body; // 

    // Insert all new teams into the database
    premiereModel.insertMany(teams)
        .then((result) => {
            console.log('Data saved successfully:', result);
            res.send(result); // Send back the saved teams data if needed
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            res.status(500).send("Error saving data");
        });
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    const numericId = parseInt(id);

     teams = teams.filter(team => team.id !== numericId)
 
     res.send(`Team with ${numericId} ID is deleted`)
 })

 router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { name, founded, stadium, city } = req.body
    const numericId = parseInt(id);

    const team = teams.find(team => team.id === numericId);
 
     if (name) {
        team.name = name;
     }
     if (founded) {
        team.founded = founded;
     }
     if (stadium) {
        team.stadium = stadium;
     }
     if (city) {
        team.city = city;
     }

     res.send(`Team ${numericId} has updated`)
 })


module.exports = router;