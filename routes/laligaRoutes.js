const express = require("express");
const router = express.Router();
const laLigaModel = require('../schemas/laLiga');



let teams = [
    {
        name: "Real Madrid",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Madrid",
    },
    {
        name: "Girona",
        founded: 1878,
        stadium: "Old lady",
        city: "Girona",
    },
    {
        name: "Barcelona",
        founded: 1880,
        stadium: " Etihad Stadium",
        city: "Barcelona",
    },
    {
        name: "Athletico Madrid",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Madrid",
    },
    {
        name: "Real Betis",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Betis",
    },
    {
        name: "Real Sociedad",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Sociedad",
    },
    {
        name: "Las Palmas",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Palmas",
    },
    {
        name: "Valencia",
        founded: 1878,
        stadium: "Fly Emirateas",
        city: "Valencia",
    },{
        name: "Osasuna",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Osasuna",
    },{
        name: "Getafe",
        founded: 1878,
        stadium: "Old Trafford",
        city: "Getafe",
    }
]

router.get('/', (req,res) => {
    res.send(teams)

})

router.get('/', async (req, res) => {
    try {
        const teams = await laLigaModel.find();
        res.send(teams);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).send("Error fetching teams");
    }
});

router.post('/', async (req, res) => {
    try {
        const newTeamsData = req.body;
        const result = await laLigaModel.insertMany(newTeamsData);
        console.log('Data saved successfully:', result);
        res.send(result);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send("Error saving data");
    }
});


router.delete('/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const numericId = parseInt(id);
        // Your delete logic here
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, founded, stadium, city } = req.body;
        const numericId = parseInt(id);
        // Your update logic here
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;