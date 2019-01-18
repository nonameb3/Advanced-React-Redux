const userModel = require('../models/user')
const jwt = require('jwt-simple')

let object = {}
object.signup = function(req,res,next) {
  const email = req.body.email
  const password = req.body.password

  userModel.findOne({email:email}, (err,value) => {
    // if any err
    if(err) return next(err)

    // if email is does exist
    if(value){
      return res.status(422).send({error:'email in use!'})
    }

    // if email not exist
    const user = new userModel({
      email,
      password
    })

    user.save(err => {
      if(err) return next(err)
      res.send({token: tokenGenarater(user)})
    })

  })
}

// token gen
function tokenGenarater(user){
  const date = new Date().getTime()
  const secretCode = process.env.SECRETCODE || 'sccode'
  return jwt.encode({sub:user.id, lat:date}, secretCode)
}

module.exports = object