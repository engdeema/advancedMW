// call express
const express = require("express");
const productRouters = require("./apis/products/routers");
const connectDB = require("./db/database");
// express instance
const app = express();
// allows the app to access the body of req
app.use(express.json());

app.use("/apis/products", productRouters);
connectDB();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

//checking
