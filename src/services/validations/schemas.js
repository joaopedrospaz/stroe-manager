const Joi = require('joi');

const schemaName = Joi.string().min(5).required()
  .messages({
    'any.required': '"name" is required',
    'string.min': '"name" length must be at least 5 characters long',
  });

module.exports = {
  schemaName,
};