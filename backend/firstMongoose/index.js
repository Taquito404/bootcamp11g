
const mongoose = require('mongoose')

const DB_USER = 'TacoUser'
const DB_PASSWORD = 'taco123'
const DB_HOST = 'cluster0.gbkch.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//schema

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minLenght: 2,
    maxLenght: 100,
    required: true
  },
  lastName: {
    type: String,
    minLenght: 2,
    maxLenght: 100,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 150,
    required: true
  },
  gender: {
    type: String,
    enum: ['m','f'],
    required:true
  }
})
/*
modelo-> 
-nombre de la colección
-scheme
*/

//modelo
const Koder = mongoose.model('koders', koderSchema)

mongoose.connect(url, { userNewUrlParser: true,  useUnifiedTopology: true})
  .then((conn) => {
    console.log('DB Connected :D')
    Koder.find({})
      .then((kodersFound) => {
        console.log('kodersFound: ',kodersFound)
      })
      .catch((error) => {
        console.error('error: ',error)
      })

    // Koder.create({
    //   name:'Mario',
    //   lastName: 'Andrade',
    //   age: 21,
    //   gender: 'm'
    // })
    // .then((koderCreated) => {
    //   console.log('koderCreated', koderCreated)
    // })
    // .catch((error) => {
    //   console.error('error: ',error)
    // })
  })
  .catch((error) => {
    console.error('error: ',error)
  })
