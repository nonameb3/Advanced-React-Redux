const express = require('express')
const app = express()
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./router')

// app setup
app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))
router(app)

// server setup
const port = 8080
const server = http.createServer(app)
server.listen(port)
console.log('server start at 8080')