const camelize = require('camelize');
const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return camelize(result);
};

const getById = async (productId) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id=?', [productId]);
  return camelize(result);
};

const insert = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return insertId;
};

const update = async (id, name) => {
  await connection.execute('UPDATE StoreManager.products SET name=? WHERE id=?', [name, id]);
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};