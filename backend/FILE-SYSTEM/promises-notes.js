
// Las promesas son objetos (tienen dos parámetros)
//para construirlas ocupamos un constructor

//Constructor
//resolve => función: nos hace pasar una promesa de pendiente a resuelta

//reject => función: pasa la promesa de pendiente a rechazada

const promesa = new Promise((resolve, reject)=>{
    const todoCool = false
    if (todoCool){
        resolve('ok')
    }else {
        reject('not ok :c')
    }
})

//los objetos promesa tienen 2 métodos:
//-then, que se ejecuta cuando la promesa se resuelve satisfactoriamente; también resibe lo que le pasamos a la función resolve

//-catch, se ejecuta cuando la promesa se rechaza; recibe lo que se le pasa a la función reject
//
//
promesa
    .then( (resultado) => { console.log(resultado) } ) //'ok'
    .catch( (error) => { console.error(error) } ) //'not ok :c'