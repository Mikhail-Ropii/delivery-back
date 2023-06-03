const express = require("express");
const ctrl = require("../../controllers/shops");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllShops));

router.get("/:shopId", isValidId, ctrlWrapper(ctrl.getProductsByShopId));

module.exports = router;
