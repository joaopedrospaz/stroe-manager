const erro = {
  NOT_FOUND: 404,
  'any.required': 400,
  'string.min': 422,
  'number.positive': 422,
};

const mapError = (type) => erro[type] || 500;

module.exports = {
  erro,
  mapError,
};