const express = require("express");

const router = express.Router();

let teams = [
    {
        name: "Manchester United",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Manchester",
        id: 1
    }
]

router.get('/', (req,res) => {
    res.send(teams)

})

router.get('/', (req,res) => {
    const { id } = req.params;
    const numericId = parseInt(id);

    const team = teams.find(team => team.id === numericId);
    
    if (team) {
        res.send(team);
    } else {
        res.status(404).send("Team not found");
    }

})

router.post('/', (req,res) => {
    const newTeam = req.body;
    teams.push(newTeam);
    res.send(`${newTeam.name}`)
})


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