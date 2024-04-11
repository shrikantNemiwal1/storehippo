const Product = require("../models/product");
const ErrorClass = require("../services/error");
const { validateRequest } = require("../services/common.utils");
const {
  MESSAGES: { ERROR, SUCCESS },
} = require("../constants/constant");

module.exports.getAllProducts = async (req, res, next) => {
  try {
    let data = [];

    data = await Product.find().select("-__v -_id");

    res.status(200).send({
      message: data.length ? SUCCESS.DATA_FETCHED : ERROR.NO_RESULT_FOUND,
      count: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const isInvalidRequest = validateRequest(req.body, {
      id: true,
      title: true,
      description: true,
      price: true,
      discountPercentage: false,
      rating: true,
      stock: true,
      brand: true,
      category: true,
      thumbnail: true,
      images: true,
    });

    if (isInvalidRequest) throw new ErrorClass(ERROR.INVALID_REQ, 400);

    const isProductExists = await Product.findOne({
      title,
    });

    if (isProductExists) throw new ErrorClass(ERROR.PRODUCT_EXIST, 409);

    const productData = {
      ...req.body,
    };

    if (isProductExists) await Product.findOneAndUpdate({ title }, productData);
    else {
      const insertData = new Product(productData);
      await insertData.save();
    }

    res.send({ message: SUCCESS.PRODUCT_ADDED, title, status: 202 });
  } catch (err) {
    next(err);
  }
};
