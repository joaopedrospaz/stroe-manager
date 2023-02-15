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

const updateProduct = async (id, name) => {
  let findProduct = await getProductById(id);
console.log('name', name);
  if (findProduct.type) return findProduct;

  const error = validateInput.validateName(name);
  if (error.type) return error;

  await productsModel.update(id, name);
  
  findProduct = await getProductById(id);

  return findProduct;
};

const deleteProduct = async (id) => {
  const validateId = await getProductById(id);
  
  if (validateId.type) return validateId;

  await productsModel.deleteProduct(id);

  return { type: null, message: '' };
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};