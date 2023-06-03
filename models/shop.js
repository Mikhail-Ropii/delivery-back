const { Schema, model } = require("mongoose");

const shopSchema = Schema({
  name: {
    type: String,
  },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
