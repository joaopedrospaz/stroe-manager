const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const { allProducts } = require('./mocks/productService.mock');

describe('Testa a unidade de service de products', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Buscando Todos os Produtos', async function () {
    sinon.stub(productModel, 'getAll').resolves(allProducts);
    const result = await productsService.getAllProducts();

    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(allProducts);
  });

  // it('Buscando produtos pelo id', async () => {
  //   sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
  //   const result = await productModel.getById(1)
  //   expect(result).to.be.deep.equal(allProducts[0])
  // });
  
});