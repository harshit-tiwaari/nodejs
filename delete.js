const dbconnect = require('./mongodb')
const deletedata = async() => {
  let data = await dbconnect();
  let result=await data.deleteOne({name:"14 pro max"})
  console.log(result)
  
  if (result.acknowledged) {
    console.log("record deleted ")
  }
}
deletedata()