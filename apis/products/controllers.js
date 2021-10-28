// let products = require("../../db/models/products");
// call the Product
const { findByIdAndUpdate } = require("../../db/models/Product");
const Product = require("../../db/models/Product");

exports.productListFetch = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ Message: error.Message });
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log("newProduct", newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

exports.productDelete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json("product not found");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.productUpdate = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(req.params.productId);

    if (product) {
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: productId },
        req.body,
        { new: true }
      );

      return res.json(updatedProduct);
    } else {
      return res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
