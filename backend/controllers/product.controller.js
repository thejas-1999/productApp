import Product from "../models/product.model.js";

export const addProducts = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).send({ message: "All fields are mandatory" });
  }

  try {
    const newProduct = await Product.create(product); // Creates and saves the product
    res.status(201).send({ message: "Created successfully", data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ count: products.length, data: products });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).send({ message: "No Products found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(400).send({ message: "No Products found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      res.status(400).send({ message: "There is no products" });
    }
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
