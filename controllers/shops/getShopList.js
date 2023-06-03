const { Shop } = require("../../models/shop");

const getShopList = async (req, res, next) => {
  const result = await Shop.find();

  res.json(result);
};

module.exports = getShopList;
