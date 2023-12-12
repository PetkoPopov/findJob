const User  = require('../models/userModel.js')
exports.create = async ({ email, password, repeat_password }) => {
    const user = await User.create({ email, password })
    // user.then(() => console.log("you save the user !"))
    //     .catch(() => { })
    return user
}
exports.login=async({email,password})=>{
const user = await User.find({email})
console.log(user);
return user
}
