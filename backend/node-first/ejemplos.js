
//declaración de variables
var x = 'x'
let y = 'y'
const z = 'z'

console.log(x, y, z)

//funciones

function  suma (a, b){
  console.log('suma: ', a + b)
  return a + b
}

const  resta = (a, b) =>{
  console.log('resta: ',a - b)
  return a - b
}

suma(1, 2)
resta(1,1)

if (true){
  console.log('esto es verdad')
}else{
  console.log('esto no es verdad')
}
