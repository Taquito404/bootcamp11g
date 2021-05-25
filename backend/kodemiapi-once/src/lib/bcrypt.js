
const bcrypt = require('bcrypt')

function hash (plainText){
  return bcrypt.hash(plainText, 10)
}

module.exports = {
  //todo lo que existía más nuestra nueva función
  ...bcrypt, 
  hash
}
