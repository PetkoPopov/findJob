const express = require('express')
const { PORT } = require('./constants/constants')
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarsConfig.js')
const router = require('./router.js')
const cookieParser = require('cookie-parser')

const app = express()
expressConfig(app)
handlebarsConfig(app)
app.use(cookieParser())
app.use(router)


app.listen(PORT, () => { console.log(`server is runing on port ${PORT}`); })