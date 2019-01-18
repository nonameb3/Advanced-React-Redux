const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: string
})

// create new model
const userModel = mongoose.model('user', userSchema)

// export
module.exports = userModel