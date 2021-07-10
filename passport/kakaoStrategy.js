const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/user');


module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        try { 
        const exUser=await User.findOne({ snsId: profile.email, provider: 'kakao' })
            if (exUser) {
                const result = await bcrypt.compare(profile.password, exUser.password)
                if (result) {
                    done(null, exUser);
                } else {
                    done(null,false,{message: '비밀번호가 일치하지 않습니다.'})
                }
                
            } else {
                done(null,false,{message: '존재하지 않는 회원입니다.'})
    }
        } catch (error) {
            console.error(error);
            done(error)
        }
    })
    )
}