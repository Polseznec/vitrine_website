const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description_part_one: {
      type: String,
      required: true,
      trim: true,
    },
    description_part_two: {
      type: String,
      required: true,
      trim: true,
    },
    height: {
      type: String,
      required: true,
      trim: true,
    },
    width: {
      type: String,
      required: true,
      trim: true,
    },
    depth: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    fabric_description: {
      type: String,
      required: true,
      trim: true,
    },
    available: {
      type: Boolean,
      required: true,
      trim: true,
      default: true,
    },
    main_picture: {
      type: String,
      required: true,
      default: "./uploads/product/product_default.png",
    },
    pattern_picture: {
      type: String,
      required: true,
      default: "./uploads/product/product_default.png",
    },
    carrousel_one_picture: {
      type: String,
      required: true,
      default: "./uploads/product/product_default.png",
    },
    carrousel_two_picture: {
      type: String,
      required: true,
      default: "./uploads/product/product_default.png",
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
