const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;

const registrationValidationSchemas = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "uk", "ua"] },
      }).required(),
    password: Joi.string().pattern(passwordPattern).messages({'string.pattern.base': 'Password should contain minimum eight characters, at least one letter and one number.'})
})

module.exports = {registrationValidationSchemas}