const { urlencoded } = require("express")
const express = require('express')
const path = require('path')
const cookieParse = require("cookie-parser")
const expressConfig = (app) => {

    app.use(express.static(path.resolve(__dirname, '../public')))
    app.use(urlencoded({ extended: false }))
    app.use(cookieParse())
}

module.exports = expressConfig
// console.log(path.resolve(__dirname,'../public'));