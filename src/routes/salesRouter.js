const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/', salesController.postSale);

module.exports = salesRouter;