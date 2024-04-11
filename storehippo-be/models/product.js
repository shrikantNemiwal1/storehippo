const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      minlength: [3, "Minimum 3 letters required"],
    },
    description: {
      type: String,
      required: true,
      minlength: [3, "Minimum 3 letters required"],
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
    rating: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    images: {
      type: Array,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.post("save", (error, doc, next) => {
  console.log(error);
  if (error.code === 11000) {
    next({ code: 400, message: "Product already exists !" });
  } else {
    next(error);
  }
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
