const { Order } = require("../../models/order");

const getOrdersByUser = async (req, res, next) => {
  const { email, phone } = req.query;

  const result = await Order.find({
    "userData.email": email,
    "userData.phone": phone,
  });
  res.status(201).json(result);
};

module.exports = getOrdersByUser;
