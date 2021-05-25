
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll () {
  return Users.find()
}

async function signUp ({ name, email, password }){

  const userFound = await Users.findOne({ email })

  if (userFound) {
    throw new Error('User already exist')
  }

  const encriptedPassword = await bcrypt.hash(password)

  return Users.create({
  name, 
  email, 
  password: encriptedPassword
})//necesita encriptarse
}

module.exports = {
  getAll,
  signUp
}
