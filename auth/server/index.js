require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./router')
const mongoose = require('mongoose')

// database setup
const mongodbURL = process.env.DATABASEURL
mongoose.connect(mongodbURL,{ useNewUrlParser: true })
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// app setup
app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))
router(app)

// server setup
const port = 8080
app.listen(port, () =>{
  console.log(`server start at port ${port}`)
})