const controllerWrapper = require("../utils/controllerWrapper");
const {registrationService, loginService} = require("../services/authServices")

const registration = controllerWrapper(async(req, res)=>{
    const user = await registrationService(req.body)
    res.json(user).status(201);
})

const login = controllerWrapper(async(req, res)=>{
const accssesToken = await loginService(req.body)
res.json({accssesToken}).status(200)
})

module.exports = {registration, login}