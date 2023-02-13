const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/db/connection');
const { allProducts } = require('./mocks/productModel.mock');
const productModel = require('../../../src/models/productsModel');

describe('Testa a unidade de model de products', function () {
  afterEach(() => {
    sinon.restore();
  });
  it('Buscando Todos os Produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const result = await productModel.getAll();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Buscando produtos pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    const result = await productModel.getById(1)
    expect(result).to.be.deep.equal(allProducts[0])
  });
  
});