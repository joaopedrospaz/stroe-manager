const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const productServiceMock = require('./mocks/productService.mock');

describe('Testa a unidade de service de products', async () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Buscando Todos os Produtos', async function () {
    sinon.stub(productModel, 'getAll').resolves(productServiceMock.allProducts);
    const result = await productsService.getAllProducts();

    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(productServiceMock.allProducts);
  });

  it('Buscando produtos pelo id existente', async () => {
    sinon.stub(productModel, 'getById').resolves(productServiceMock.allProducts[0]);
    const result = await productsService.getProductById(1)

    expect(result.type).to.be.deep.equal(null)
    expect(result.message).to.be.deep.equal(productServiceMock.allProducts[0])
  });

  it('Criando novo produto com sucesso', async function () {
    sinon.stub(productModel, 'insert').resolves();
    sinon.stub(productModel, 'getById').resolves(productServiceMock.mockCreateProduct);
    const insert = await productsService.createProduct('Anel do laterna verde');
    expect(insert.type).to.be.equal(null)
    expect(insert.message).to.be.deep.equal(productServiceMock.mockCreateProduct)
  });

  it('Atualizando produto com sucesso', async function () {
    sinon.stub(productModel, 'getById').onFirstCall().resolves(productServiceMock.allProducts[1]).onSecondCall().resolves(productServiceMock.mockUpdateProduct);

    sinon.stub(productModel, 'update').resolves();

    const result = await productsService.updateProduct(2, 'Martelo do Batman');

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(productServiceMock.mockUpdateProduct);
  });
  
  it('Deleteando produto com sucesso', async function () {
    sinon.stub(productModel, 'getById').resolves(productServiceMock.allProducts[2])
    sinon.stub(productModel, 'deleteProduct').resolves();
    const result = await productsService.deleteProduct(3);
    expect(result.type).to.be.equal(null);

  });

  
  
});