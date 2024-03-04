const express = require("express");
const app = express();
const PORT = 3000;
const premiereLeague = require('./routes/premiereRoutes.js');
const laLiga = require('./routes/laligaRoutes.js');
const seriaA = require('./routes/seriaRoutes.js');
const mongoose = require('mongoose');
const laLigaModel = require('./schemas/laLiga');
const premiereModel = require('./schemas/premiereLeague');
const seriaModel = require('./schemas/seriaA');



const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // 
};

app.use(express.json());

app.use(requestLogger);

mongoose.connect('mongodb+srv://henokdebesay1:henokdebesay1@cluster0.jme2bid.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds if server selection takes too long
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Set views
app.set("views", "./views");

app.get('/', (req, res) => {
    res.send("HELLO");
});

app.use("/premiere", premiereLeague);
app.use("/laliga", laLiga);
app.use("/seriaa", seriaA);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});