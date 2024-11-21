import express from "express";
import {
  addProducts,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

//add products
router.post("/", addProducts);

//get all products
router.get("/", getAllProducts);

//get one product
router.get("/:id", getOneProduct);

//delete products
router.delete("/:id", deleteProduct);

//update product
router.put("/:id", updateProduct);

export default router;
