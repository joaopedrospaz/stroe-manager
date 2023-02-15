// const camelize = require('camelize');
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

module.exports = {
  insertSale,
  insertProductSale,
};