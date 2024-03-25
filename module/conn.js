const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://<username>:<password>@cluster0.jme2bid.mongodb.net/';

// Database Name
const dbName = 'Football_Leagues';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
async function connect() {
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}

module.exports = { connect };
