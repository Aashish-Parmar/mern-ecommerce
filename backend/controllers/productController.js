// backend/controllers/productController.js
const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10, sort, search = "" } = req.query;

  const query = {
    name: { $regex: search, $options: "i" }
  };

  const sortOptions = {
    "price-asc": { price: 1 },
    "price-desc": { price: -1 }
  };

  const products = await Product.find(query)
    .sort(sortOptions[sort] || {})
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const count = await Product.countDocuments(query);

  res.json({
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  });
};

exports.addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.json(saved);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.editProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
