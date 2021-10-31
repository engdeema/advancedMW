// let products = require("../../db/models/products");
// call the Product
const { findByIdAndUpdate } = require("../../db/models/Product");
const Product = require("../../db/models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productListFetch = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

exports.productCreate = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log("newProduct", newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product._id },
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
