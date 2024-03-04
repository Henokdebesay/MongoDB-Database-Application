const express = require("express");
const router = express.Router();
// const laLigaModel = require('./schemas/laLiga');



let teams = [
    {
        name: "Real Madride",
        founded: 1902,
        stadium: "Santiago Bernabéu Stadium",
        city: "Madrid, Spain",
    }
]

router.get('/', (req,res) => {
    res.send(teams)

})

router.get('/', async (req,res) => {
   try{
        const { id } = req.params;
        const numericId = parseInt(id);
        const team = await teams.find(team => team.id === numericId);
        res.send(team);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

router.post('/', async (req,res) => {

     try{
        const newTeam = await req.body;
        teams.push(newTeam);
        res.send(`${newTeam.name}`)
    } catch(err){
        res.status(500).json({message: err.message});
    }
})


router.delete('/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const numericId = parseInt(id);
        teams = await teams.filter(team => team.id !== numericId)
        res.send(`Team with ${numericId} ID is deleted`)
    } catch(err){
        res.status(500).json({message: err.message});
    }
 })

 router.put('/:id', async (req,res) => {
    
    try{
        const { id } = req.params;
        const { name, founded, stadium, city } = req.body
        const numericId = parseInt(id);
    
        const team = await teams.find(team => team.id === numericId);
     
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
    } catch(err){
        res.status(500).json({message: err.message});
    }
    
   
 })


module.exports = router;