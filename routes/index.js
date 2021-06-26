const express=require('express')
const path=require('path')

const router=express.Router()
const User=require('../models/user')

router.get('/',(req,res,next) => {
    res.render('main')
})

router.get('/register', (req,res)=> {
    res.render('register')
})


module.exports = router;