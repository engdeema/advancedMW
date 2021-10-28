// importing express
const express = require("express");
// i am creating a mini express app
const router = express.Router();
// importing the functions from the controller folder
const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

//put all the routs here

router.get("/", productListFetch);
router.post("/", productCreate);
router.delete("/:productId", productDelete);
router.put("/:productId", productUpdate);

// exporting routers
module.exports = router;
