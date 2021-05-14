// Practica fs + express
/*
  // GET /Koders -> reegresa un json con una lista de koders
  La lista de koders viene de un archivo
*/

const express = require ('express')
const server = express()

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/koders')

// middleware
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)
/*
router.get('/', (request, response) => {
  response.json({
      success: true,
      message: '11g APIv1'

  })
})*/

/* server.get('/koders', (request, response) => {
    fs.readFile('koders.json', 'utf-8', (error, data) => {
        if (error) {
            console.error('Algo salio mal: ', error);
        }
        response.json(JSON.parse(data))
    })
}) */



server.listen(8080, () => {
    console.log('Server listening in port 8080');
})

/*
práctica:
crear un router para mentores

GET/mentores
GET /mentores:id
POST /mentores
PATCH /mentores/:id
*/