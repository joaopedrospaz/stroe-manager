const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/search', productsController.searchProduct);

productsRouter.get('/:id', productsController.getProductById);

productsRouter.post('/', productsController.postProduct);

productsRouter.put('/:id', productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;