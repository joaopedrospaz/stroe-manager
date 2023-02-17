const salesService = require('../services/salesService');
const statusErros = require('../utils/statusErros');

const postSale = async (req, res) => {
  const itens = req.body;

  const { type, message } = await salesService.createSale(itens);

  if (type) return res.status(statusErros.erro[type]).json({ message });
  
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const { message } = await salesService.getAllSales();
  
  res.status(200).json(message);
}; 

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);

  if (type) return res.status(statusErros.erro[type]).json({ message });
  
  res.status(200).json(message);
}; 

const removeSale = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesService.deleteSale(id);

    if (type) return res.status(statusErros.erro[type]).json({ message });

  res.status(204).end();
};
module.exports = {
  postSale,
  getAll,
  getById,
  removeSale,
};