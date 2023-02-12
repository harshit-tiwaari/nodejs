const {MongoClient} = require("mongodb")
//const { MongoClient } = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017"
const database="e-comm"
const client = new MongoClient(url);

async function dbconnect() {
  
  let result = await client.connect() 
  let db = result.db(database)
  return db.collection("product")
  //let data=await(collection.find({name:'M 40'}).toArray())
  //console.log(data);

}
module.exports = dbconnect;

