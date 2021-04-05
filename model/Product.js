const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the price"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    description: String,
  },
  { timestamps: true },
);
