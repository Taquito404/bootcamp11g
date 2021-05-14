
const fs = require('fs')

fs.copyFile('aCopiar.txt', 'copiado.txt', (error) => {
    if (error) {
        console.error('error:', error) 
       return
      }
  console.log('Se ha copiado con éxito')
})
//por cada función se debería tener un scrpit ejecutable
//readfile
//appendFile
//unlinl
//copyfile fs.copyFile(src, dest[, mode], callback)