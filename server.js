const express = require("express");
const app = express();
const PORT = 3000;
const premiereLeague = require('./routes/premiereRoutes.js');
const laLiga = require('./routes/laligaRoutes.js');
const seriaA = require('./routes/seriaRoutes.js');
const mongoose = require('mongoose');


const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // 
};

app.use(express.json());

app.use(requestLogger);

mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
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