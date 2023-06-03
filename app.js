const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
