const { Schema, model } = require("mongoose");
const Joi = require("joi");

const cartShema = Schema({
  shop: {
    type: String,
  },
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
});

const orderSchema = Schema({
  cart: {
    type: [cartShema],
  },
  sum: {
    type: Number,
  },
  userData: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
});

const cart = Joi.object({
  shop: Joi.string().required(),
  _id: Joi.string().required(),
  name: Joi.string().required(),
  img: Joi.string().required(),
  qty: Joi.number().required(),
  price: Joi.number().required(),
  totalPrice: Joi.number().required(),
});

const addOrder = Joi.object({
  cart: Joi.array().items(cart).required(),
  sum: Joi.number().required(),
  userData: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }).required(),
});

const schemas = { addOrder };

const Order = model("order", orderSchema);

module.exports = { Order, schemas };
