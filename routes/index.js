const { Template } = require('ejs')
const express=require('express')
const path=require('path')

const router=express.Router()
const User=require('../models/user')

router.get('/',(req,res,next) => {
   if(req.isAuthenticated()) {
       let list=Template.list(req.list);
       let html=Template.HTML(title,list,
        `1<div id="logined">
        <h3 class="text-center">환영합니다!</h3>
        <h4 class="username">${req.user}</h4>
        <div id="logout-link" class="text-right">
            <a href="/" class="text-info">logout</a>
    </div>`                    
                 
        )
   }
    res.render('main')

})

router.get('/register', (req,res)=> {
    res.render('register')
})


module.exports = router;