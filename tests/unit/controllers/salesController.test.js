const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesControllerMock = require('./mocks/salesController.mock');
const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');
const { expect } = chai;
chai.use(sinonChai);

describe('Testa a unidade de controller de sales', function () {
  it('Adicionando compra com sucesso, deve retornar o status 201', async function () {
    const req = { body: salesControllerMock.postSale};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'createSale').resolves({ type: null, message: salesControllerMock.createdSale });
    
    await salesController.postSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesControllerMock.createdSale);
  });

  it('Listando todos os produtos, deve retornar status 200', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAllSales').resolves({ type: null, message: salesControllerMock.allSales });

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesControllerMock.allSales);
  });
});