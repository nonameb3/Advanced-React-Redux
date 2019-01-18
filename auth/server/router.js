const auth = require('./controllers/authentication')

const router = function(app) {
  app.get('/', (req,res) => {
    res.send([
      'oj1','ol2','oj3'
    ])
  })

  app.post('/signup', auth.signup)
}

module.exports = router