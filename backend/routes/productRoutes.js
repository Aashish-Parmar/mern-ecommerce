// backend/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");





router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", editProduct);

module.exports = router;
