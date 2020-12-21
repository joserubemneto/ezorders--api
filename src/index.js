const { request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const socketIo = require('socket.io')


mongoose.connect('mongodb://localhost:2717/ezorders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.use(express.json())
app.use(routes)

server.listen(3001, () => console.log('> Server started at http://localhost:3001'))
