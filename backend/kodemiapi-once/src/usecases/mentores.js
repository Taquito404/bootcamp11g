
const Mentores = require('../models/mentores')

function getAll () {
  return Mentores.find({})
}

function create ({ name, lastName, age, gender, module }){
  return Mentores.create({ name, lastName, age, gender, module })
}

function deleteById(id){
  return Mentores.findByIdAndDelete(id)
}

function updateById (id, dataToUpdate) {
  return Mentores.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
