
//que devuelva el nombre y apellido de los koders
function koders() {
    let numberK = prompt("Ingrese el número de Koders a registrar: ")
    for (var i = 0; i < numberK; i++) {
        let nameK = prompt("Ingrese el nombre del koder:")
        let lastnameK = prompt("Ingrese el apellido del koder")
        console.log("El nombre del koder ingresado es: " + nameK + " " + lastnameK)
    }
}

/*
-pedir al usuario la cantidad de koders a guardar
-pedir nombre y apellido de cada uno 
-guardar cada koder en un Array (uso de nombre y apellido con i)
-imprimir cada uno de los koders
*/
var nameK = [];
var lastnameK = [];
function koders2() {
    let numberK = prompt("Ingrese el número de Koders a registrar: ")
    for (var i = 0; i < numberK; i++) {
        nameK = [prompt("Ingrese el nombre del koder:")];
        lastnameK = [prompt("Ingrese el apellido del koder")];
        console.log((i + 1) + ".- El nombre del koder ingresado es: " + nameK[i] + " " + lastnameK[i])
    }
}

//  permitr guardar koders adicionales
function addKoder() {
    let newName = prompt("¿Cuál es el nombre del nuevo koder?")
    nameK.push(newName);
    let newLastname = prompt("¿Cuál es el apellido del nuevo koder?")
    nameK.push(newLastname);
    console.log("Nuevo koder agregado: " + nameK + " " + lastnameK)
}

 //permitr borrar un koder aleatorio en la lista
 function eraseKoder() {
    let number = Math.floor(Math.random() * (nameK.length - 0 + 1)) + 0;
    nameK.splice(number, 1)
    lastNameK.splice(number, 1)
 }
