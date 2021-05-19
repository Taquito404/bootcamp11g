
const http = require('http')

const server = http.createServer((request,response) => {
  console.log('url: ',request.url)
  console.log('method: ',request.method)

  if (request.url === '/koders'){
    if (request.method == 'GET'){
      response.write('Aquí están todos los koders')
      }else if (request.method == 'POST'){
        response.write('Aquí puedes agregar nuevos koders')
      }
    else {
      response.write('No estaba preparado para esto :c')
    }
  } else if (request.url === '/mentors'){
    if (request.method == 'GET'){
      response.write('Aquí están todos los koders')
      }else if (request.method == 'POST'){
        response.write('Aquí puedes agregar nuevos koders')
      }
    else {
      response.write('No estaba preparado para esto :c')
    }
  }
  else {
    response.write('No estaba preparado para esto :c')
  }

  //response.write('hola desde un servidor en node')
  response.end()
})

server.listen(8080, () => {
  console.log('servidor escuchando en puerto 8080')
})

//el método puede reaccionar distinto del método a la url