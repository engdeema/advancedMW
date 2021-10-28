//import mongoose
const mongoose = require("mongoose");
// my model type and the validation
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: true,
  },
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});
// to create my model then we call it in the controller
module.exports = mongoose.model("Product", ProductSchema);
