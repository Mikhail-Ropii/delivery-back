const { Product } = require("../../models/product");
const { createError } = require("../../helpers/createError");

const getProductsByShopId = async (req, res, next) => {
  const { shopId: shop } = req.params;
  const result = await Product.find({ shop });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getProductsByShopId;
