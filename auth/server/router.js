const auth = require('./controllers/authentication')
const passportServices = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignIn = passport.authenticate('local', {session: false})

// ROUNTER
const router = app => {
  app.get('/', requireAuth, (req,res) => {
    res.send({
      status: 'login'
    })
  })
  app.post('/signin', requireSignIn, auth.signin)
  app.post('/signup', auth.signup)
}

module.exports = router