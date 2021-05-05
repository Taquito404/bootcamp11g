
const fs = require('fs')

fs.writeFile('created.txt', 'Hola desde node fs', 'utf8', (error) => {
  if (error){
    console.error('No se pudo crear el archivo: ',error)
    return
  }
  console.log('Se escribió el archivo')
})
//por cada función se debería tener un scrpit ejecutable
//readfile
//appendFile
//unlinl
//copyfile