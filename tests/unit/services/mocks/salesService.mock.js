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

module.exports = {
  listProductsToCreate,
  createdResult,
  ProductsTosale
}