const Joi = require('joi');

const LoginValidate = function(data) {
  console.log('data = ', data);
  var schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { LoginValidate };
