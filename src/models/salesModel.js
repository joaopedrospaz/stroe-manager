const camelize = require('camelize');
const connection = require('./db/connection');

const insertSale = async () => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  return insertId;
};

const insertProductSale = async (saleId, sale) => {
 const result = await connection
  .execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, sale.productId, sale.quantity],
);
    return result;
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

const getById = async (id) => {
  let [[resultSales]] = await connection
    .execute('SELECT * FROM StoreManager.sales WHERE id = ?', [id]);
  let [result] = await connection
    .execute(
      'SELECT * FROM StoreManager.sales_products WHERE sale_id = ? ORDER BY product_id', [id],
  );
  
  result = camelize(result);
  resultSales = camelize(resultSales);

    return { resultSales, result };
};

const deleteSale = async (id) => {
  const [resultSale] = await connection
    .execute('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
  const [resultSaleProuct] = await connection
    .execute('DELETE FROM StoreManager.sales_products WHERE sale_id = ?', [id]);
  
  return { resultSale, resultSaleProuct };
};
module.exports = {
  insertSale,
  insertProductSale,
  getAll,
  getById,
  deleteSale,
};