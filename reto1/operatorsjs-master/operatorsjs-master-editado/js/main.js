/*
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal : IMC Menos de 18.5
Normal  : IMC 18.5 – 24.9
Peso superior al normal : IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0
2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México      169.9   170.0   160.8   cm's
Australia   172.6   179.2   165.9   cm's
Canadá      171.0   178.1   163.9   cm's
Brasil      167.3   173.6   160.9   cm's
Reino Unido 171.0   177.5   164.4   cm's
crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.
3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.
*/

//Ejercicio 1

/*
var weight = parseFloat(prompt("Introduce tu peso en kilogramos"));
var height = parseFloat(prompt("Introduce tu altura en metros"));

if (weight != 0 && height != 0) {
  var imc = (weight / Math.pow(height,2)).toFixed(2);
  
  if (imc < 18.5) {//Peso inferior al normal
    alert("El imc es: " + imc + " Peso inferior al normal");
  } else if (imc > 18.5 && imc <= 24.9) {//normal
    alert("El imc es: " + imc + " Peso normal");
  } else if (imc >= 25.0 && imc <= 29.9) {//Peso superior al normal
    alert("El imc es: " + imc + " Peso superior al normal");
  } else {//obesidad
    alert("El imc es: " + imc + " Obesidad");
  } 
} else {
  alert("Introduce un número mayor a cero");
}*/

//Ejercicio 2 
/*
var country = prompt("¿Cuál es tu páis?");
var gender = prompt("¿Cuál es tu género?");
var hight = parseFloat(prompt("¿Cuál es tu altura en cm?"));

var message;
switch (country) {
  case "México":
  case "mexico":
  case "méxico":
  case "Mexico":
    switch (gender) {
      case "Mujer":
      case "mujer":
        message = hight >= 160.8 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      case "Varón":
      case "Varon":
      case "varón":
      case "varon":
        message = hight >= 170.0 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      default:
        message = hight >= 169.9 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
    }
    break;
  case "Australia":
  case "australia":  
    switch (gender) {
      case "Mujer":
      case "mujer":
        message = hight >= 165.9 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      case "Varón":
      case "Varon":
      case "varón":
      case "varon":
        message = hight >= 179.2 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      default:
        message = hight >= 172.6 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
    }
    break;
  case "Canadá":
  case "canadá":
  case "canada":
  case "Canada":
    switch (gender) {
      case "Mujer":
      case "mujer":
        message = hight >= 163.9 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      case "Varón":
      case "Varon":
      case "varón":
      case "varon":
        message = hight >= 178.1 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      default:
        message = hight >= 171.0 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
    }
    break;
  case "Brasil":
  case "brasil":
    switch (gender) {
      case "Mujer":
      case "mujer":
        message = hight >= 160.9 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      case "Varón":
      case "Varon":
      case "varón":
      case "varon":
        message = hight >= 173.6 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      default:
        message = hight >= 167.3 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
    }
    break;
  case "Reino Unido":
  case "reino unido":
    switch (gender) {
      case "Mujer":
      case "mujer":
        message = hight >= 164.4 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      case "Varón":
      case "Varon":
      case "varón":
      case "varon":
        message = hight >= 177.5 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
      default:
        message = hight >= 171.0 ? "tu estatura es superior al promedio" : "tu estatura es inferior o igual al promedio";
        alert(message);
        break;
    }
    break;
  default:
    alert("No se cuenta con el dato de estatura para ese país");
    break;
}
*/

/*
3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.
*/

const ACERO = 7850;
const COBRE = 8940;
const ORO = 19300;
const PLATA = 10490;
const DIAMANTE = 3515;

var lado = parseFloat(prompt("Ingrese la dimensión del lado del cubo"));
var material = prompt("Ingrese el material a usar");
if (lado > 0) {
  var volumenCubo = Math.pow(lado, 3);
  var message;
  switch (material) {
    case "acero":
    case "Acero":
      densidad = volumenCubo * ACERO;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "cobre":
    case "Cobre":
      densidad = volumenCubo * COBRE;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "oro":
    case "Oro":
      densidad = volumenCubo * ORO;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "plata":
    case "Plata":
      densidad = volumenCubo * PLATA;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "diamante":
    case "Diamante":
      densidad = volumenCubo * DIAMANTE;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    default:
      alert("No se encuentran los datos de ese material.");
      break;
  }
} else {
  alert("Ingrese un valor mayor a 0.")
}