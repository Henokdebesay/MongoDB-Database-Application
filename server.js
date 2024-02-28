const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://henokdebesay1:henokdebesay1@cluster0.jme2bid.mongodb.net/')

app.listen(PORT, ()=> {
    console.log(`I am listening at localhost:${PORT}`)
})

app.get('/', (req, res)=> {
  
    res.status(200).json(
        [
            {name: 'Henok',
            age: 30},
            {name: 'Samsom',
                age: 35},
            {name: 'Senait',
                age: 40}
        ])
})