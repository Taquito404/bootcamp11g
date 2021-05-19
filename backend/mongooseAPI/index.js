
const express = require('express')
const mongoose = require('mongoose')

const DB_USER = 'TacoUser'
const DB_PASSWORD = 'taco123'
const DB_HOST = 'cluster0.gbkch.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const server = express()

server.get('/koders', (requeste,response) => {
  response.json({
    message: 'all koders',
    success: true,
    data: {
      koders: []
    }
  })
})



mongoose.connect(url, { userNewUrlParser: true,  useUnifiedTopology: true})
.then((conn) => {
  server.listen(8080, () => {
    console.log('server is listening')
  })
})
.catch(error => {
  console.error('error: ',error)
})
