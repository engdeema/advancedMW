// call express
const express = require("express");
const productRouters = require("./apis/products/routers");
const connectDB = require("./db/database");
const morgan = require("morgan");
// express instance
const app = express();
//morgan gives me the status code
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.host}:8000${req.path}`);

  next();
});
// allows the app to access the body of req
app.use(express.json());

app.use("/apis/products", productRouters);
app.use((req, res, next) => {
  res.status(404).json({ message: "path not found" });

  next();
});
connectDB();
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

//checking
