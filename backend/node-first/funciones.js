
//pasar por valor o referencia
// declaración de la función
function hola (nombre){
    return `hola ${nombre}, Saludos`
}

// uso o la llamada a una función
const x = hola('charles')//llamada guardada en una constante
console.log('x: ',x)

const otraFuncion = hola
