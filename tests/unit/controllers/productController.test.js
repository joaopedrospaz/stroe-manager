const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productControllerMock = require('./mocks/productController.mock');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');

describe('Testa a unidade de controller de products', function () {
  it('Listando todos os produtos, deve retornar status 200', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAllProducts').resolves({ type: null, message: productControllerMock.allProducts });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productControllerMock.allProducts);
  });

  it('Buscando produtos pelo id com id vláido, deve retornar status 201', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves({ type: null, message: productControllerMock.allProducts[0] });
    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productControllerMock.allProducts[0]);
  });

  it('Adicionando produto com sucesso, deve retornar o status 200', async function () {
    const req = { body: { name: 'Elmo do Doutor Destino' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'createProduct').resolves({type: null, message: productControllerMock.createdProduct})

    await productsController.postProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productControllerMock.createdProduct);
  });

  it('Atualizar um produto com sucesso, deve retornar o status 200', async function () {
    const req = { params: { id: 6 }, body: { name: 'Lápis do John Wick' } };
    const res = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    sinon.stub(productsService, 'updateProduct').resolves({
      type: null, message: productControllerMock.updatedProduct
    });

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productControllerMock.updatedProduct);
  });

  it('Removendo produto com sucesso, deve retornar o status 204', async function () { 
    const req = { params: { id: 3 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({
      type: null, message: ''
    });

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });
});