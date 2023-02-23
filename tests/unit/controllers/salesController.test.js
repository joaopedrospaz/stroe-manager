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

    sinon.stub(salesService, 'createSale').resolves({ type: null, messsage: salesControllerMock.createdSale });
    
    await salesController.postSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
  });
});