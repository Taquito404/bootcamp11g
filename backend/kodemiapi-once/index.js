
require('dotenv').config()

//console.log('env: ', process.env)

const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
	.then(() => {
		console.log('DB connected')
		server.listen(8080, () => {
			console.log('Server is listening')
		})
	})
	.catch(error => {
		console.error('DB Connection Error: ',error)
	})

	/*
		GET /koders ->
			1.- Crear (o asegurarse de que exista) el Modelo necesario
			2.- Crear el caso de uso necesario
			3.- Crear el endpoint necesario

	 */

/*
.----- Práctica:
-POST /koders
-DELETE /koder/:id
--> pista Koders.findByIdAndDelete(id)
*/

/**
práctica
GET /mentores
POST /mentores
DELETE /mentores/:id
PATCH  /mentores/:id

mentores
-name
-lastname-
-age
-gender
-modulo ['front, 'back. 'cloud, 'react]

 */

//autenticación

//autorización

//bcrypt
//jwt
//flujo de registro y loggeo
/*
registro
1.- otorgamos datos de usuario
	email
	password
	name
2.- validación de usuario existente
3.- encriptar el password
4.- guardar en la base de datos

bcrypt -> encriptar
lib/bcypt
modelo, caso de uso, rutas
*/