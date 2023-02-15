const salesModel = require('../models/salesModel');
const productsService = require('./productsService');
const validationsInput = require('./validations/validationsInput');

const createSale = async (sales) => {
  const error = await validationsInput.findSaleErros(sales);
  if (error.type) return error;
  
  const findProduct = await Promise.all(sales
    .map(async (elem) => productsService.getProductById(elem.productId)));
    const productNotFound = findProduct.find((elem) => elem.type !== null);
    if (productNotFound) return productNotFound;
    
    const saleId = await salesModel.insertSale();
   await Promise.all(sales.map(async (elem) => {
      salesModel.insertProductSale(saleId, elem);
    }));
    
    return { type: null, message: { id: saleId, itemsSold: sales } };
};

module.exports = {
  createSale,
};