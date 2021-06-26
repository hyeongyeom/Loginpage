const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User  = require('../models/user');


const router=express.Router();



router.post('/login', (req, res, next) => {
    console.log("로그인시도")
    passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
        return res.redirect('/')
    })(req,res,next)
})



router.post('/join',async (req,res,next)=> {
    const { username, email, password } = req.body
    try {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            return res.redirect('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            name: username,
            email: email,
            password: hash
        });
        return res.redirect('/')
    } catch (error) {
        console.error(error);
        return next(error)
    }  
})


module.exports=router