
const fs = require('fs')

fs.readFile('/Documentos/backend/FILE-SYSTEM', (error, data) => {
  if (error) {
      console.error('error:', error) 
     return
    }
  console.log(data)
})
//por cada función se debería tener un scrpit ejecutable
//readfile
//appendFile
//unlinl
//copyfile