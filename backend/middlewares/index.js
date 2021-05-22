
const express = require('express')
const server = express('express')
const routerB =require('./routerB')

// function middleware (request, response, next){
//   console.log('middleware externo')
//   next()
// }

function factoryMiddleware () {
  return function (request, response, next){
    console.log('middleware factory')
    next()
  }
}

// server.use(middleware)
server.use(factoryMiddleware())

server.use((request, response, next) => {
  console.log('middleware a nivel de aplicación')
  next()
}, (request, response, next) => {
  console.log('middleware a nivel de aplicación II')
  next()
})

server.use('/b', routerB)

server.use((request, response, next) => {
  console.log('middleware nivel de aplicación III')
  next()
})

server.get('/a',(reques, response) => {
  response.json({ menssage: 'API middleware'})
})

server.get('/', (request, response, next) => {
  console.log('middleware a nivel de ruta')
  next()
}, (request, response) => {
  response.json({ message: 'API Middleware' })
})

server.listen(8080, () => {
  console.log('server listening')
})

/*
Los middlewares existen a tres niveles (o funciones)(todos son funciones):
1.- Nivel de aplicación o servidor
2.- Nivel de router
3.- Nivel de ruta
*/