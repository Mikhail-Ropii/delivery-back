const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  img: {
    type: String,
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
  },
});

const Product = model("product", productSchema);

module.exports = Product;
