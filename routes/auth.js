const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');


const router=express.Router();



router.post('/login', (req,res,next)=> {
res.send("success login")
})



router.post('/join',(req,res,next)=> {

})


module.exports=router