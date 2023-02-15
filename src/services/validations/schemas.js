// const Joi = require('joi');

// const schemaName = Joi.string().min(5).required()
//   .messages({
//     'any.required': '"name" is required',
//     'string.min': '"name" length must be at least 5 characters long',
//   });

// const schemaSale = Joi.object().keys({
//   productId: Joi.number().positive().integer().required(),
//   quantity: Joi.number().positive().integer().required(),
// }).messages({
//   'any.required': '"{#key}" is required',
//   'number.positive': '"{#key}" must be greater than or equal to 1',
// });

// module.exports = {
//   schemaName,
//   schemaSale,
// };