const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
 const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    Category: String
  })
const saveindb = async () => {
 const product = mongoose.model("product", productSchema)
  let data = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    Category: String
  })
  
  let result = await data.save()
  console.log(result)
}
  const updateindb = async () => {
  
    const product = mongoose.model("product", productSchema)
    let data = await product.updateOne({ name: "iphone 14 pro" },
      { $set: { price: 18000 } })
  
  console.log(data)
}
updateindb() //a lot of questions?

const deleteindb = async() => {
  const product = mongoose.model('product', productSchema)
  let data = await product.deleteOne({ name: 'iphone xr' })
  console.log(data);
}
deleteindb()