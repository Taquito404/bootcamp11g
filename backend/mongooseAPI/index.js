
const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')
const server = express()

server.use(express.json())

const DB_USER = 'TacoUser'
const DB_PASSWORD = 'taco123'
const DB_HOST = 'cluster0.gbkch.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


// server.get('/koders', async (request, response) => {

//   const allKoders = await Koder.find({})

//   response.json({
//     message: 'all koders',
//     success: true,
//     data: {
//       koders: allKoders
//     }
//   })
// })

server.get('/koders', async (request, response) => {
  // const genderK = request.params.genderKoder
  // let allKoders = await Koder.find({})
  // let filteredKoderByGender = genderK ? allKoders.filter(koder => koder.gender == genderK) : null

  // if (!filteredKoderByGender) {
  //   response.status(404)
  //   response.json({
  //     success: false,
  //     message: 'No hay koders disponibles :c'
  //   })
  //   return
  // }
  const gender = request.query.gender

  const filters = {}
  if (gender) filters.gender = gender

  const allKoders = await Koder.find(filters)
  // if (filteredKoderByGender) {
  // allKoders = filters
  response.json({
    success: true,
    message: 'Se encontraron coincidencias',
    data: {
      koders: allKoders
    }
  })
  // }
})

server.post('/koders', async (request, response) => {

  // if (!name || !lastName || !age || !gender){
  //   response.status(400)
  //   response.json({
  //     success: false,
  //     message: "all fields are required"
  //   })
  //   return
  // }

  try {
    const name = request.body.name
    const lastName = request.body.lastName
    const age = request.body.age
    const gender = request.body.gender
    const newKoder = { name, lastName, age, gender }

    console.log(newKoder)
    await Koder.create(newKoder)
    response.json({
      success: true,
      message: 'Se ha agregado un nuevo Koder'
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }

  


})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => {
    server.listen(8080, () => {
      console.log('server is listening')
    })
  })
  .catch(error => {
    console.error('error: ', error)
  })


/*
practica

GET /koders
-gender

-POST /koders
-name
-lastname-
-age
-gender

const gender = request.query.gender

const filters  = {}
if (gender) filters.gender = gender

const allKoders = await Koder.find(filters)
*/