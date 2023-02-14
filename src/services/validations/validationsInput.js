const schemas = require('./schemas');

const validateName = (name) => {
  const { error } = schemas.schemaName.validate(name);
  if (error) return { type: error.details[0].type, message: error.message };

  return { type: null, message: '' };
};

module.exports = { 
  validateName,
};