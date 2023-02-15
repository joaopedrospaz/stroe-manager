const salesService = require('../services/salesService');
const statusErros = require('../utils/statusErros');

const postSale = async (req, res) => {
  const itens = req.body;

  const { type, message } = await salesService.createSale(itens);

  if (type) return res.status(statusErros.erro[type]).json({ message });
  
  return res.status(201).json(message);
};

module.exports = {
  postSale,
};