const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/db/connection');
const productModelMock = require('./mocks/productModel.mock');
const productModel = require('../../../src/models/productsModel');

describe('Testa a unidade de model de products', function () {
  afterEach(() => {
    sinon.restore();
  });
  it('Buscando Todos os Produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productModelMock.allProducts]);

    const result = await productModel.getAll();
    expect(result).to.be.deep.equal(productModelMock.allProducts);
  });

  it('Buscando produtos pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[productModelMock.allProducts[0]]]);
    const result = await productModel.getById(1)
    expect(result).to.be.deep.equal(productModelMock.allProducts[0])
  });

  it('Adicionando Novo Produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 9 }]);
    const result = await productModel.insert('Capa do Doutor Estranho');
    expect(result).to.be.equal(9);
  });

  it('Atualizando produto', async function () {
    sinon.stub(connection, 'execute').resolves(productModelMock.mockUpdateResult);

    const result = await productModel.update(3, 'Armadura do Homem de Ferro');

    expect(result.affectedRows).to.be.equal(1);
    expect(result.changedRows).to.be.equal(1);
  });
  
  it('Deletando produto', async function () {
    sinon.stub(connection, 'execute').resolves(productModelMock.mockDeletProduct);

    const result = await productModel.deleteProduct(3);

    expect(result.affectedRows).to.be.equal(1);
  });
  
});