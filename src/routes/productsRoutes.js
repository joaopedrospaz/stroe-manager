const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.post('/', productsController.postProduct);

productsRouter.put('/:id', productsController.updateProduct);

module.exports = productsRouter;