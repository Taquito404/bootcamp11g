
class Cuadrilatero {
  constructor (size){
    this.lado1 = size;
    this.lado2 = size;
    this.lado3 = size;
    this.lado4 = size;
  }
}

class Triangle{}

const cuadrado = new Cuadrilatero()
const c2 = new Cuadrilatero(4)
const t1 = new Triangle ()

console.log(cuadrado)
console.log(t1)
