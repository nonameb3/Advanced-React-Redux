const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// encrypt password before save a model
userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err)

      this.password = hash
      next()
    })
  })
})

// create new model
const userModel = mongoose.model('user', userSchema)

// export
module.exports = userModel