const mongoose = require('mongoose');

const main=async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
  const Productschema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    Category: String
  })
  const Product = mongoose.model("product", Productschema)
  let data = new Product({ name: "iphone 14 pro",price:160000,brand:"Apple",Category:"mobile" })
  let result = await data.save()
  console.log(result)
}
main()


