// let products = require("../../db/models/products");
// call the Product
const { findByIdAndUpdate } = require("../../db/models/Product");
const Product = require("../../db/models/Product");

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
    const product = await Product.findById(req.params.productId);
    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return next({ status: 404, message: "Product Not Found" });
    }
  } catch (error) {
    return next(error);
  }
};

exports.productUpdate = async (req, res, next) => {
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
      next({ status: 404, message: "Product Not Found" });
    }
  } catch (error) {
    return next(error);
  }
};
