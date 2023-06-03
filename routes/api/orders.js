const express = require("express");
const ctrl = require("../../controllers/orders");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { isValidId, validation } = require("../../middlewares");
const { schemas } = require("../../models/order");

const router = express.Router();

router.post("/", validation(schemas.addOrder), ctrlWrapper(ctrl.placeOrder));

router.get("/", ctrlWrapper(ctrl.getOrdersByUser));

router.get("/:orderId", isValidId, ctrlWrapper(ctrl.getOrderById));

module.exports = router;
