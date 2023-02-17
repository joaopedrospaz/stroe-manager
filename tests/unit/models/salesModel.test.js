const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const salesModel  = require('../../../src/models/salesModel');
const salesModelMock = require('./mocks/salesModel.mock');

describe('Testa a unidade de model de Sales', function () { 
  afterEach(() => {
    sinon.restore();
  });

  it('Inserindo uma nova venda em sales', async function () { 
    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
    const result = await salesModel.insertSale();
    expect(result).to.be.equal(5);
  });

  it('Inserindo uma nova venda em ProductSales', async function () { 
    sinon.stub(connection, 'execute').resolves(salesModelMock.salesInsertProductSale);
    const result = await salesModel.insertProductSale(1,{ productId: 1, sale: { productId: 1, quantity: 4 } });
    expect(result.affectedRows).to.be.equal(1);
  });

  it('Obtendo todas as vendas', async function () {
    sinon.stub(connection, 'execute').onFirstCall().resolves([salesModelMock.getAllSales.resultSales]).onSecondCall().resolves([salesModelMock.getAllSales.result]);

    const result = await salesModel.getAll();

    expect(result).to.be.deep.equal(salesModelMock.getAllSales);
  });
});