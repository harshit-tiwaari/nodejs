const dbconnect = require("./mongodb")
const updateData = async () => {
  
  let data = await dbconnect()
  let result = await data.updateOne(
   {name:'edge 30',price:9800},{$set:{name:'14 pro max'}} 
  )
  console.log(result)

}
updateData()



