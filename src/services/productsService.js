const validateInput = require('./validations/validationsInput');
const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAll();

  return { type: null, message: allProducts };
};

const getProductById = async (productId) => {
  const product = await productsModel.getById(productId);

  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

const createProduct = async (productName) => {
  const error = validateInput.validateName(productName);
  if (error.type) return error;
  
  const newProductId = await productsModel.insert(productName);
  const newProduct = await productsModel.getById(newProductId);
  return { type: null, message: newProduct };
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};