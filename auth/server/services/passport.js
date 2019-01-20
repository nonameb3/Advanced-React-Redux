const passport = require('passport')
const User = require('../models/user')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const localStrategy = require('passport-local')

//===========================================
// email and password Auth (local)
//===========================================
// create local strategy
const localOption = {usernameField: 'email'}
const localLogin = new localStrategy(localOption, function(email, password, done){
  // verify this email and password is correct => call done
  // otherwise, call done with false
  User.findOne({email}, function(err,user){
    if(err) return done(err)
    if(!user) return done(null, false)

    // compare password
    user.comparePassword(password, (err, isCorrect)=>{
      if(err) return done(err)
      if(!isCorrect) return done(null, false)

      return done(null, user)
    })
  })
})
//===========================================

//===========================================
// Json Web Token Auth (jwt)
//===========================================
// setup passport Strategy
const JwtOption = {
  jwtFromRequest : extractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRETCODE || 'sccode'
}

// create JWT Strategy
const jwtLogin = new jwtStrategy(JwtOption, function(payload, done){
  User.findById(payload.sub, (err, user)=>{
    if(err) return done(err, false)
    if(user){
      done(null, user)
    }else{
      done(null, false)
    }

  })
})
//===========================================

// tell passport to use Strategy
passport.use(localLogin)
passport.use(jwtLogin)