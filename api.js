const express = require('express')
const mongodb=require('mongodb')
const dbconnect = require('./mongodb')

const app = express()

app.use(express.json())

app.get('/', async(req, res) => {
  let data = await dbconnect()
  data = await data.find().toArray()
  console.log(data);
  res.send( data)
});
app.post("/", async(req, res) => {
 
  let data = await dbconnect()
  let result= await data.insertOne(req.body)
  res.send (result)
})
app.put("/", async(req, res) => {
  let data = await dbconnect()
  let result = data.updateOne(
    {name:req.params.name}, { $set:req.body}

  )
  res.send({result:"update"})
  
})
app.delete("/:id", async(req, res) => {
  console.log(req.params.id)
  const data = await dbconnect()
  const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id)})
  
  res.send(result)
})
app.listen(5007)