const camelize = require('camelize');
const connection = require('./db/connection');

const insertSale = async () => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  return insertId;
};

const insertProductSale = async (saleId, sale) => {
  await connection
  .execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, sale.productId, sale.quantity],
);
};

const getAll = async () => {
  let [resultSales] = await connection
    .execute('SELECT * FROM StoreManager.sales');
  let [result] = await connection
    .execute('SELECT * FROM StoreManager.sales_products ORDER BY product_id');
 result = camelize(result);
  resultSales = camelize(resultSales);
  
  return { resultSales, result };
};

module.exports = {
  insertSale,
  insertProductSale,
  getAll,
};