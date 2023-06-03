const { Order } = require("../../models/order");

const getOrdersByUser = async (req, res, next) => {
  const { email, phone } = req.params;

  const result = await Order.find({ email, phone });
  res.status(201).json(result);
};

module.exports = getOrdersByUser;
