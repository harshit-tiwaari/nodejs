const dbconnect = require("./mongodb")
const insert = async() => {
  const db=await dbconnect()
  const result = await db.insertMany(
    [{ name: 'note 5', brand: 'vivo', price: 320, category: "mobile" },
      {name: 'edge 30', brand: 'motorola', price: 500, category: "mobile"}
  
  ]  )
  if (result.acknowledged) {
    console.log('data inserted')
  }

}
insert()

