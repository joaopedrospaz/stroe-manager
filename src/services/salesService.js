const salesModel = require('../models/salesModel');
const productsService = require('./productsService');
const validationsInput = require('./validations/validationsInput');

const createSale = async (sales) => {
  const error = validationsInput.findSaleErros(sales);
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

const getAllSales = async () => {
  const { result, resultSales } = await salesModel.getAll();

  const findDate = (saleId) => {
   const date = resultSales.find((e) => e.id === saleId);
   return date.date;
  };

  const addDate = result.map((elem) => {
    const date = findDate(elem.saleId);
   return { ...elem, date };
  });
  
  return { type: null, message: addDate };
};

const getSaleById = async (idSale) => {
  const { result, resultSales } = await salesModel.getById(idSale);

  if (result.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  const { date } = resultSales;
  
  const addDate = result.map(({ saleId, ...elem }) => ({ ...elem, date }));

  return { type: null, message: addDate };
};

const deleteSale = async (id) => {
  const error = await validationsInput.validateId(id);

  if (error.type) return error;

  const foundSale = await getSaleById(id);
  if (foundSale.type) return foundSale;

  await salesModel.deleteSale(id);

  return { type: null, message: '' };
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  deleteSale,
};