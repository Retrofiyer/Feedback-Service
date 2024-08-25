// config/db.js
const { MongoClient, ServerApiVersion } = require('mongodb');

let db;

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('MongoClient connected to MongoDB');
  } catch (err) {
    console.error('MongoClient connection error:', err.message);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };