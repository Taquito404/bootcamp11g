
// este archivo aloja la definición de nuestro servidor

const express = require('express')

const kodersRouter = require('./routers/koders')
const mentoresRouter = require('./routers/mentores')

const app = express()

app.use(express.json())

app.use('/koders', kodersRouter)
app.use('/mentores', mentoresRouter)

//router.post('/', ())

module.exports = app
