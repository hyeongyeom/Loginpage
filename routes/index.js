const express=require('express')
const path=require('path')

const router=express.Router()
const User=require('../models/user')

router.get('/',(req,res,next) => {
    res.render('main')
})

router.post('/register', (req,res)=> {
    res.send('success')
    const post=req.body
    User.create({
        name:post.username,
        email:post.email,
        password:post.password
    })
})
router.get('/register', (req,res)=> {
    res.render('register')
})


module.exports = router;