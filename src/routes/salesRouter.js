const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/', salesController.postSale);

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;