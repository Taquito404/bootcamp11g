

const mongoose = require('mongoose')

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

const model = mongoose.model('koders', koderSchema)

module.exports = model
