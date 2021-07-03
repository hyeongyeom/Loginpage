const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
      console.log('serializse' , user.email)
    done(null, user.email);
  });

  passport.deserializeUser((id, done) => {
  done(null, id);
//     User.findOne({
//       where: { id },
//       include: [{
//         model: User,
//         attributes: ['id', 'nick'],
//         as: 'Followers',
//       }, {
//         model: User,
//         attributes: ['id', 'nick'],
//         as: 'Followings',
//       }],
//     })
//       .then(user => done(null, user))
//       .catch(err => done(err));
  });

  local();
//   kakao();
};