const bcrypt = require('bcrypt')

const User = require('../models/userModel.js')
const jwt = require('../lib/jwt.js')
const { Secret } = require('../constants/constants.js')

exports.create = async ({ email, password, repeat_password }) => {
    const user = await User.create({ email, password, repeat_password })
    return user
}

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid username !");
    }

    // validate password
    
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Invalid username or password!");
    }

    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = await jwt.sign(payload, Secret, { expiresIn: "3d" });

    return token;
}
