// Practica fs + express
/*
  // GET /Koders -> reegresa un json con una lista de koders
  La lista de koders viene de un archivo
*/

const fs = require('fs')
const express = require('express')
server.use(express.json())


const fs = require('fs')
const express = require('express')
const server = express()

// middleware

server.use(express.json()) //importante, antes de todos los get, post, etc

/*server.get('/hola', (request, response) => {
  response.write('GET /hola')
  response.end()
})

server.post('/hola', (request,response) => {
  response.write('Este es un post a /hola')
  response.end()
})*/

function getkodersFile() {
  const content = fs.readFileSync('koders.json', 'utf8')
  return JSON.parse(content)
}

server.get('/koders', (request, response) => {
  /*response.write('Aquí están todos los Koders')
  response.end()
  response.status(501)
  response.json({ message: 'Aquí la lista de koders'})*/
  const genderFilter = request.query.gender
  const countFilter = parseInt(request.query.count || 0)
  const jsonParsed = getkodersFile()
  const kodersData = null

  if (genderFilter) {
     const kodersFilteredByGender = jsonParsed.koders.filter( koder => koder.gender === genderFilter)
     kodersData = kodersFilteredByGender
  }

  

  if (countFilter){
    const dataToFilter = kodersData || jsonParsed.koders
    kodersData = kodersData.splice(0, countFilter)
  }

  jsonParsed.koders = kodersData || jsonParsed.koders

  response.json(jsonParsed.koders)

})

server.post('/koders', (request,response) => {
  /*const cuerpo = request.body
  console.log('body: ', cuerpo)
  console.log('body: ', request.body)
  response.json({
    message: 'ok'

  })*/
  const name = request.body.name
  const gender = request.body.gender

  const newKoder = {name, gender}

  const content = fs.readFileSync('koders.json', 'utf8')
  const json = JSON.parse(content)

  console.log('json: ',json)
  json.koders.push(newKoder)
  console.log('json: ',json)

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2) ,'utf8')

  response.json({
    success: true
  })

  /*response.write('Aquí puedes crear koders')
  response.end()*/
})

server.put('/koders',(request,response) => {
  response.write('Aquí puedes sustituir un koder')
  response.end()
})

// /recurso/identificador
// /koders/(loquesea)
// /koders/1


server.patch('/koders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const name = request.body.name
  const content = fs.readFileSync('koders.json', 'uft8')
  const json = JSON.parse(content)

  const newKoders = json.koders.reduce((koders, koderActual ) => {
    if (id === koderActual.id){
      koderActual.name = name
    }
    return [
      ...koders,
      koderActual
    ]
  }, [])

  json.koders = newKoders

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success:true
  })

})

server.delete('/koders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const content = fs.readFileSync('koders.json', 'uft8')
  const json = JSON.parse(content)

  const deleteKoders = json.koders.reduce((koders, koderActual ) => {
    if (id === koderActual.id){
      koders.splice(koderActual.id,1);
    }
    return [
      ...koders
    ]
  }, [])

  json.koders = deleteKoders

  fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

  response.json({
    success:true
  })
})

server.get('/koders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const content = fs.readFileSync('koders.json', 'uft8')
  const json = JSON.parse(content)

  const getKodersById = json.koders.reduce((koders, koderActual ) => {
    if (id === koderActual.id){
      return [
        json.koders.id,
        json.koders.name,
        json.koders.gender
      ]
    }
  }, [])

  json.koders = getKodersById

})

server.listen(8080, () => {
  console.log('Server listening in port 8080')
})
/*
endpoint
conjunto entre un método y una ruta
GET /koders
GET /koders:id
POST /koders
*/