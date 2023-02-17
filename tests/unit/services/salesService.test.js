const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../src/services/salesService');
const productsService = require('../../../src/services/productsService');
const salesModel = require('../../../src/models/salesModel');
const salesServiceMock = require('./mocks/salesService.mock')

describe('Testa a unidade de service de sales', function () {
   afterEach(() => {
    sinon.restore();
   });
  
  it('Criando nova venda', async function () {
    sinon.stub(productsService, 'getProductById').onFirstCall().resolves({type: null, message:salesServiceMock.ProductsTosale[0].productId}).onSecondCall().resolves({type: null, message:salesServiceMock.ProductsTosale[1].productId});
    sinon.stub(salesModel, 'insertSale').resolves(4);
    sinon.stub(salesModel, 'insertProductSale').onFirstCall().resolves().onSecondCall().resolves;
    const result = await salesService.createSale(salesServiceMock.listProductsToCreate);
    expect(result.message).to.be.deep.equal(salesServiceMock.createdResult);
  });

  it('Listando todas as vendas', async function () { 
    sinon.stub(salesModel, 'getAll').resolves(salesServiceMock.getAll);
    const result = await salesService.getAllSales();
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(salesServiceMock.allSales);
  });
}); 