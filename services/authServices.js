const {HttpError} = require("../utils/HttpError")
const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const { assignTokens } = require("../utils/assignTokens")

const registrationService = async (body) => {
    const {email, password} = body
   const user = await User.findOne({email})
   if (user) {
   throw new HttpError(409, "Email must be unique")
   }

   const hashedPassoword = await bcryptjs.hash(password, 12)
 const newUser = await User.create({...body, password: hashedPassoword})

 return newUser
}

const loginService = async (body) => {
    const {email, password, token} = body
    const user = await User.findOne({email})
    if(!user) {
        throw new HttpError(401, "Email or password is incorrect")
    }

    const isPasswodCorrect = await bcryptjs.compare(password, user.password)
    if (!isPasswodCorrect) {
        throw new HttpError(401, "Email or password is incorrect")
    }
const {accssesToken, refreshToken} = assignTokens(user)
await User.findByIdAndUpdate(user._id, {refreshToken})
return accssesToken
}

module.exports = {registrationService, loginService}