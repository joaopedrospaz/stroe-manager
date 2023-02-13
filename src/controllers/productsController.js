const productsService = require('../services/productsService');
const statusErros = require('../utils/statusErros');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();
  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);

  if (type) return res.status(statusErros.erro[type]).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductById,
};