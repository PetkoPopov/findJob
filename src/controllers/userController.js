const router = require('express').Router()

const {create,login} = require('../service/userService')


router.get('/register',(req,res)=>{res.render('register')})
router.post('/register' , (req,res)=>{
const {email , password , repeat_password} = req.body
const user = create({email ,password ,repeat_password})
console.log(" you save the new user");
res.redirect('/user/login')
})
router.get('/login',(req,res)=>{res.render('login')})
router.post('/login',(req,res)=>{
    const{email,password} = req.body
    const user =  login({email,password})
    
    // console.log(user)
    res.redirect('/')
})
module.exports = router