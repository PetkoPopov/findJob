const router = require('express').Router()
const homeController = require('./controllers/homeController.js')

// const router = express.Router()

router.use('/',homeController)

module.exports = router