const Product = require("../model/Product");

const allProduct = async (req, res) => {
  const product = awaitProduct.find();
  res.status(200).json({ product });
};

const getProduct = async (req, res) => {
  res.send("get single Product");
};

const createProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const description = req.body.description;

  const product = await Product.create({ name, price, quantity, description });
  res.status(201).json({ product });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id, req.body, { new: true });

  res.status(204).send("Delete Product");
};

module.exports = {
  allProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
