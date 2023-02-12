const express = require('express')
const reqFilter=require('./middleware')
const app = express()
const route = express.Router();

//app.use(reqFilter)
route.use(reqFilter)
app.get("/", (req,res) => {
  res.send("welcome to home page")
})
app.get("/about", reqFilter, (req, res) => {
  res.send("welcome to about page")
})
route.get("/users",reqFilter, (req,res) => {
  res.send("welcome to Users page")
})
route.get("/contact", reqFilter, (req, res) => {
  res.send("welcome to contact page")
})
app.use("/",route)
app.listen(5006)