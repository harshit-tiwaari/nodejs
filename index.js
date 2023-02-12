//const express = require("express")

//const path = require("path")
const app = express();

const publicPath = path.join(__dirname, "public")
app.set("view engine", "ejs");


console.log(__dirname)
app.use(express.static(publicPath))
app.get("", (_,res) => {
  res.sendFile(`${publicPath}/index.html`)
})
app.get("/profile", (_,res) => {
  const user = {
    name: "Harshit",
    email: "harshtiwari316@test.com",
    city: "jaipur",
    skills:["php","js","c++"]
   
  }
  res.render("profile",{user})
})
app.get("/login", (_, res) => {
  res.render("login")
})
app.get("/about", (_,res) => {
  res.sendFile(`${publicPath}/about.html`)
})
app.get("/help", (_,res) => {
  res.sendFile(`${publicPath}/help.html`)
})
app.get("*", (_,res) => {
  res.sendFile(`${publicPath}/about.html`)
})
app.listen(5025)


