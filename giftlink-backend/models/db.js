/*jshint esversion: 8 */
require('dotenv').config();
const { MongoClient } = require('mongodb');

let dbInstance = null;
const dbName = "giftDB";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const mongoURI = process.env.MONGO_URL;
    const client = new MongoClient(mongoURI);

    // Task 1: Connect to MongoDB
    await client.connect();

    // Task 2: Connect to database giftDB and store in dbInstance
    dbInstance = client.db(dbName);

    // Task 3: Return the database instance
    return dbInstance;
}

module.exports = connectToDatabase;