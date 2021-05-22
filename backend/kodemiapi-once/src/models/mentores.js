
const mongoose = require('mongoose')

// mentores
// -name
// -lastname-
// -age
// -gender
// -modulo ['front, 'back. 'cloud, 'react]


const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength:100,
    required: true
  },
  lastName:{
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true
  },
  age:{
    type: Number,
    min:0,
    max:150,
    required: true
  },
  gender:{
    type: String,
    enum: ['m', 'f'],
    required: true
  },
  module:{
    type: String,
    enum: ['front','back','cloud','react'],
    required:true
  }
})

const model = mongoose.model('mentores', mentorSchema)

module.exports = model

