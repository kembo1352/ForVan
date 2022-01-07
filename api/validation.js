//VALIDATION

const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    newAccountName: Joi.string().min(1).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    newFirstName: Joi.string().min(1).required(),
    newLastName: Joi.string().min(1).required(),
    newMobile: Joi.number().min(1).required(),
    newAddress: Joi.string().min(6).required(),
    newFavClub: Joi.string().min(1).required(),
  });

  return schema.validate(data);
};

const createUserValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginAdminValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.loginAdminValidation = loginAdminValidation;
module.exports.createUserValidation = createUserValidation;
