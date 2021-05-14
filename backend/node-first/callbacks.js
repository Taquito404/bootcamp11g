
//callback

function irACasa (avisar) {
    console.log('llendo a casa...')
    console.log('llegamos a casa')
    avisar ()
}

function llamarAMama () {
    console.log('hola ma, ya llegué a casa')
}

irACasa(llamarAMama)

//factory functions

function a (b) {
    console.log('a')
    return function (){
        console.log('b: ',b)
    }
}

a('hola')
a('hola')()
