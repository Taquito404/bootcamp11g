
const fs = require('fs')

fs.unlink('/Documentos/backend/FILE-SYSTEM/created.txt', (error) => {
    if (error) {
        console.error('error:', error) 
       return
      }
  console.log('La data fue eliminada!')
})
//por cada función se debería tener un scrpit ejecutable
//readfile
//appendFile
//unlinl
//copyfile