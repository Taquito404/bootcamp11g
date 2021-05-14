

const fs = require('fs')

fs.appendFile('created.txt','Holita desde node js', (error) => {
    if (error) {
        console.error('error:', error) 
       return
      }
  console.log('La data fue agregada!')
})
//por cada función se debería tener un scrpit ejecutable
//readfile
//appendFile
//unlinl
//copyfile