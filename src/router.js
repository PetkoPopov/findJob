const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const userContrroler =require('./controllers/userController.js')
// const router = express.Router()

router.use('/',homeController)
router.use('/user',userContrroler)

module.exports = router