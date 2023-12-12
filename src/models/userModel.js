const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    email: String,
    password: String,
})

const User = mongoose.model('users', userModel)

module.exports = User