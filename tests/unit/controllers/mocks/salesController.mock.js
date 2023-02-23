const postSale = [
  {
    "productId": 4,
    "quantity": 2
  },
  {
    "productId": 9,
    "quantity": 6
  }
];

const createdSale = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 4,
      "quantity": 2
    },
    {
      "productId": 9,
      "quantity": 6
    }
  ]
};

const allSales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 3,
    "quantity": 2
  },
  {
    "saleId": 2,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 5,
    "quantity": 8
  }
]

module.exports = {
  postSale,
  createdSale,
  allSales
}