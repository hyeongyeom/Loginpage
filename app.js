const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv=require('dotenv')
const pageRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const path=require('path')
const app=express();
const {sequelize}=require('./models')



dotenv.config();


app.set('port',process.env.PORT || 80)
app.set("views", "./views")
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({force:false})
.then(()=> {
    console.log('데이터베이스 연결 성공')
})
.catch((err)=> {
    console.error(err)
})
app.use('/',pageRouter)
app.use('/auth',authRouter)


app.use((req,res,next) => {
    const error=new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status=404;
    next(error)
})

app.use((err,req,res,next) => {
    res.locals.message = err.message;
    res.locals.error=process.env.NODE_ENV !=='production' ? err : {}
    res.status(err.status || 500);
    res.render('error')
})

app.listen(app.get('port'),() => {
    console.log(app.get('port'), '번 포트에서 대기중')
})