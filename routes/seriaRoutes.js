const express = require("express");
const router = express.Router();
const seriaModel = require('../schemas/seriaA');

let teams = [
    {
        name: "Inter Milan",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Milan",
    },
    {
        name: "Juventus",
        founded: 1878,
        stadium: "Old lady",
        city: "Turin",
    },
    {
        name: "AC Milan",
        founded: 1880,
        stadium: " Etihad Stadium",
        city: "Milan",
    },
    {
        name: "Bologna",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Bologna",
    },
    {
        name: "Roma",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Rome",
    },
    {
        name: "Atalanta",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Atalanta",
    },
    {
        name: "Napoli",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Napoli",
    },
    {
        name: "Fiorentina",
        founded: 1878,
        stadium: "Fly Emirateas",
        city: "Florence",
    },{
        name: "Lazio",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Rome",
    },{
        name: "Torino",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Torin",
    }
]

router.get('/', (req,res) => {
    res.send(teams)

})

router.get('/', (req, res) => {
    seriaModel.find()
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
    seriaModel.insertMany(teams)
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