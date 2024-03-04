const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const premiereLeague = require('./routes/premiereRoutes.js');
const laLiga = require('./routes/laligaRoutes.js');
const seriaA = require('./routes/seriaRoutes.js');

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // 
};

app.use(bodyParser.json());

app.use(requestLogger);



// Set views
app.set("views", "./views");

app.get('/', (req, res) => {
    res.send("HELLO");
});

app.use("/premiere", premiereLeague);
// app.use("/laliga", laLiga);code
// app.use("/seriaa", seriaA);
// app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});