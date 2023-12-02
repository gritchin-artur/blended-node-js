const jwt = require("jsonwebtoken")

const {ACCSSES_TOKEN_SECRET, REFRESH_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} = process.env

const assignTokens = (user) => {
const payLoad = {id: user._id, email: user.email}
const accssesToken = jwt.sign(payLoad, ACCSSES_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_EXPIRES_IN})
const refreshToken = jwt.sign(payLoad, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
return {accssesToken, refreshToken}
}

module.exports = {assignTokens}
