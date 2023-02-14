const erro = {
  NOT_FOUND: 404,
  'any.required': 400,
  'string.min': 422,
  INVALID_VALUE: 422,
  TRAVEL_NOT_FOUND: 404,
  DRIVER_NOT_FOUND: 404,
  TRAVEL_CONFLICT: 409,
};

const mapError = (type) => erro[type] || 500;

module.exports = {
  erro,
  mapError,
};