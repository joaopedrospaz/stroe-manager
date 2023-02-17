const ProductsTosale = [
  {
    productId: 1,
    name: 'Martelo de Thor'
  },
  {
    productId: 6,
    name: 'Escudo do Capitão América'
  }
]

const listProductsToCreate = [
  {
    "productId": 1,
    "quantity": 2
  },
  {
    "productId": 6,
    "quantity": 5
  }
];

const createdResult = {
  "id": 4,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 6,
      "quantity": 5
    }
  ]
};

const getAll = {
  result: [
    { saleId: 1, productId: 1, quantity: 5 },
    { saleId: 3, productId: 1, quantity: 9 },
    { saleId: 3, productId: 2, quantity: 1 },
    { saleId: 2, productId: 3, quantity: 15 }
  ],
  resultSales: [
    { id: 1, date: '2023-02-17T10:47:16.000Z' },
    { id: 2, date: '2023-01-17T10:47:16.000Z' },
    { id: 3, date: '2023-02-17T10:47:28.000Z' }
  ]
};

const allSales = [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2023-02-17T10:47:16.000Z"
  },
  {
    "saleId": 3,
    "productId": 1,
    "quantity": 9,
    "date": "2023-02-17T10:47:28.000Z"
  },
  {
    "saleId": 3,
    "productId": 2,
    "quantity": 1,
    "date": "2023-02-17T10:47:28.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-01-17T10:47:16.000Z"
  }
]

module.exports = {
  listProductsToCreate,
  createdResult,
  ProductsTosale,
  getAll,
  allSales
}