const express = require("express");
const router = express.Router();
const premiereModel = require('../schemas/premiereLeague.js');
const { connect } = require('../module/conn.js');
const { MongoClient } = require('mongodb');


// let teams = [
//     {
//         name: "Manchester United",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "Manchester",
//     },
//     {
//         name: "Liverpool",
//         founded: 1878,
//         stadium: "Old lady",
//         city: "Liverpool",
//     },
//     {
//         name: "Manchester United",
//         founded: 1880,
//         stadium: " Etihad Stadium",
//         city: "Manchester",
//     },
//     {
//         name: "Chelsea",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "London",
//     },
//     {
//         name: "Everton",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "Liverpool",
//     },
//     {
//         name: "Crystal Palace",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "London",
//     },
//     {
//         name: "Totenham",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "London",
//     },
//     {
//         name: "Arsenal",
//         founded: 1878,
//         stadium: "Fly Emirateas",
//         city: "London",
//     },{
//         name: "Newcastle United",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "Newcastle",
//     },{
//         name: "Westham United",
//         founded: 1878,
//         stadium: "Old Trafford",
//         city: "London",
//     }
// ]

router.get('/', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("La_Liga");
        const results = await collection.find({}).limit(4).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("La_Liga");
        const newData = req.body; 
        await collection.insertOne(newData);
        res.status(201).send("Data added successfully");
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("La_Liga");
        const id = req.params.id;
        const updatedData = req.body; 
        await collection.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send("Data updated successfully");
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection("La_Liga");
        const id = req.params.id;
        await collection.deleteOne({ _id: id });
        res.status(200).send("Data deleted successfully");
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;