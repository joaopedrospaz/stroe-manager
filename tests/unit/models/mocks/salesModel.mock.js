const salesInsertProductSale = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0
};

const getAllSales = {
  resultSales: [
    { id: 1, date: '2023-02-16T20:19:17.000Z' },
    { id: 2, date: '2023-02-16T20:19:17.000Z' }
  ],
  result: [
    { saleId: 1, productId: 1, quantity: 5 },
    { saleId: 1, productId: 2, quantity: 10 },
    { saleId: 2, productId: 3, quantity: 15 }
  ]
};

module.exports = {
  salesInsertProductSale,
  getAllSales
}