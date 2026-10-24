require('dotenv').config({ quiet: true });
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
var data = require("./data.js").data;

// Connection URL (имя базы указано в конце адреса)
const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/golang2026';
const client = new MongoClient(url);

async function main() {
 // Use connect method to connect to the server
 await client.connect();
 console.log('Connected successfully to server');
 const db = client.db();
 const collection = db.collection('topics');

 // the following code examples can be pasted here...
 const insertResult = await collection.insertMany(data);
 console.log('Inserted documents =>', insertResult);

 return 'done.';
}

main()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close());
