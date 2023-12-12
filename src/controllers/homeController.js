const router = require("express").Router()

router.get('/', (req, res) => { res.render('home') })
router.get('/register', (req, res) => { res.render('register') })
router.get('/login', (req, res) => { res.render('login') })
router.get('/all-adds', (req, res) => { res.render('all-ads') })
router.get('/logout', (req, res) => { res.render('logout') })
router.get('/search', (req, res) => { res.render('search') })
router.get('/create', (req, res) => { res.render('create') })


module.exports = router