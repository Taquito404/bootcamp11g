
// este archivo aloja la definición de nuestro servidor

const express = require('express')

const kodersRouter = require('./routers/koders')
const mentoresRouter = require('./routers/mentores')
const usersRouter = require('./routers/users')
const logger = require('./middlewares/logger')

const app = express()

app.use(express.json())

app.use(logger)

app.use('/koders', kodersRouter)
app.use('/mentores', mentoresRouter)
app.use('/users', usersRouter)

//router.post('/', ())

module.exports = app
