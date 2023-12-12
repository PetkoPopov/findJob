const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = mongoose.Schema({
    email: {type:String, require:true},
    password: {type:String, require:true,max:[7,'too long'],min:[4,'too short']}
})
userModel.virtual("repeat_password").set(function (value) {
    console.log("repeat_password !");
    if (value !== this.password) {
        throw new mongoose.MongooseError("Password missmatch!");
    }
});

userModel.pre("save", async function () {
    console.log("PRE");
    const hash = await bcrypt.hash(this.password, 7);
    this.password = hash;
});

const User = mongoose.model('users', userModel)

module.exports = User