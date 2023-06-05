const { isValidObjectId } = require("mongoose");
const { createError } = require("../helpers/createError");

const isValidId = (req, res, next) => {
  const { shopId } = req.params;
  const result = isValidObjectId(shopId);
  if (!result) {
    const error = createError(400, "Invalid id");
    return next(error);
  }
  next();
};

module.exports = isValidId;
