const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/', salesController.postSale);

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

salesRouter.delete('/:id', salesController.removeSale);

salesRouter.put('/:id', salesController.editSale);

module.exports = salesRouter;