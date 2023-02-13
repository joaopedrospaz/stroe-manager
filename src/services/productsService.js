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

module.exports = {
  getAllProducts,
  getProductById,
};