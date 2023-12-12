const router = require('express').Router()

const { create, login } = require('../service/userService')

router.get('/register', (req, res) => { res.render('register') })
router.get('/login', (req, res) => { res.render('login') })

router.post('/register', async (req, res) => {
    const { email, password, repeat_password } = req.body

    if (password !== repeat_password) { res.redirect('/user/register') } else {

        const user = await create({ email, password, repeat_password })
        console.log(" you save the new user");
        res.redirect('/user/login')
    }
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const token = await login({ email, password })
    res.cookie("auth", token, { httpOnly: true })
    console.log(token)
    res.redirect('/')
})
router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});
module.exports = router