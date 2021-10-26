let products = require("../../products");

exports.productListFetch = (req, res) => {
  return res.json(products);
};

exports.productCreate = (req, res) => {
  products.push(req.body);
  return res.status(201).json(req.body);
};

exports.productDelete = (req, res) => {
  const productId = req.params.productId;
  const foundProduct = products.find(
    (product) => product.id === +req.params.productId
  );
  if (foundProduct) {
    products = products.filter((product) => product.id !== productId);
    res.status(204);
    return res.end();
  } else {
    return res.status(404).json("product not found");
  }
};
