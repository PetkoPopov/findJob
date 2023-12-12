const express = require('express')
const { PORT } = require('./constants/constants')
const expressConfig = require('./config/expressConfig.js')
const handlebarsConfig = require('./config/handlebarsConfig.js')
const router = require('./router.js')
const dbConnect = require('./database/dbConnect.js')

const app = express()
expressConfig(app)
handlebarsConfig(app)
/////////////////////////////////////////////////////////////////////////
dbConnect()                                                           ////   
    .then(() => { console.log('you connected with DB !'); })                  ////   
    .catch((err) => { console.log(err.message); })                                   ////    
//////////////////////////////////////////////////////////////////////////

app.use(router)


app.listen(PORT, () => { console.log(`server is runing on port ${PORT}`); })