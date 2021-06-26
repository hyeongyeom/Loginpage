const path=require('path')
const Sequelize = require('sequelize');
const User=require('./user')
const env=process.env.NODE_ENV || 'development'
const config=require('../config/config.json')[env];

const db={};

const sequelize=new Sequelize(config.database,config.username,config.password,config)

db.sequelize=sequelize;

// 모델정보를 읽어온다
db.User=User;

User.init(sequelize)

// 모델간의 관계를 설정한다



module.exports=db