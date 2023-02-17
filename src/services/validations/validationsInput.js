const schemas = require('./schemas');

const validateName = (name) => {
  const { error } = schemas.schemaName.validate(name);
  if (error) return { type: error.details[0].type, message: error.message };

  return { type: null, message: '' };
};

const validateSAle = (sale) => {
  const { error } = schemas.schemaSale.validate(sale);
  if (error) return { type: error.details[0].type, message: error.message };
  return { type: null, message: '' };
};

const findSaleErros = (sales) => {
  const errorMap = sales.map((elem) => validateSAle(elem)); 
  const findError = errorMap.find((elem) => elem.type !== null);

  if (findError) return findError;
  
  return { type: null, message: '' };
};

const validateId = (id) => {
  const { error } = schemas.schemaId.validate(id);
  if (error) return { type: error.details[0].type, message: error.message };
   
  return { type: null, message: '' };
};

module.exports = { 
  validateName,
  findSaleErros,
  validateId,

};