const { Template } = require('ejs')
const express=require('express')
const { session } = require('passport')
const path=require('path')

const router=express.Router()
const User=require('../models/user')
const passport = require('../passport')

router.get('/',(req,res,next) => {
   
    res.render('main', {
        user: req.user
    })

})

router.get('/register', (req,res)=> {
    res.render('register')
})



module.exports = router;