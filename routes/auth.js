const express = require("express");

const router = express.Router();

const {registrationValidationSchemas} = require("../utils/validation/authValidationSchemas");
const { registration, login } = require("../controllers/auth.controller");
const validateBody = require("../utils/validateBody");

router
  .post("/registration", validateBody(registrationValidationSchemas), registration);

  router
  .post("/login", login)

module.exports = {authRouter: router}